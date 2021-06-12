// Core
import React, { FC } from 'react';
import clsx from 'clsx';

// Types
import { TopRatedMovieType } from '../../../bus/movies/api/getTopRatedMovies/types';
import { StarIcon } from './elements/StarIcon';
import { ToggleMovieIdInFavouritesType } from '../../../bus/movies/hooks/useFavouriteMoviesStore/types';

type IMovieCardPropsType = {
  movie: TopRatedMovieType,
  className?: string,
  isMovieInFavourites: boolean,
  toggleMovieIdInFavourites: ToggleMovieIdInFavouritesType
}

const POSTER_BASE_PATH = 'https://image.tmdb.org/t/p/w500/';

export const MovieCard: FC<IMovieCardPropsType> = ({
  movie,
  className,
  isMovieInFavourites,
  toggleMovieIdInFavourites }) => {
  const getDate = (date: string) => new Date(date).getFullYear();

  return (
    <div className = { className }>
      <div className = { clsx('flex flex-wrap justify-center px-5 sm:px-8 py-4 sm:py-7 mx-auto bg-white rounded-lg shadow-md',
        { 'bg-green-300': isMovieInFavourites }) }>
        <div className = 'flex justify-center items-center w-full md:w-4/12 md:pr-4 mb-4 md:mb-0'>
          <img
            alt = 'avatar'
            className = 'object-cover w-100 max-h-80'
            src = { `${POSTER_BASE_PATH }${movie.poster_path}` }
          />
        </div>
        <div className = 'flex flex-col justify-between md:w-8/12 md:pl-4'>
          <div>
            <div className = 'mt-2'>
              <div className = 'flex justify-between align-center'>
                <h3
                  className = 'text-xl md:text-2xl font-bold text-gray-700 hover:underline mr-3'>
                  { movie.title }
                </h3>
                <span
                  className = 'text-sm md:text-base text-gray-100 font-bold text-center align-middle bg-gray-600 rounded hover:bg-gray-500 px-2 py-1'>
                  { movie.vote_average ? `${movie.vote_average} / 10` : '--' }
                </span>
              </div>
              <p className = 'text-sm md:text-base mt-2 text-gray-600 text-sm md:text-base'>
                { movie.overview }
              </p>
            </div>
            <div className = 'flex items-center justify-between mt-4'>
              <a
                className = 'text-sm md:text-base text-blue-500 hover:underline'
                href = { `https://www.themoviedb.org/movie/${movie.id}` }
                rel = 'noreferrer'
                target = '_blank'>
                More info
              </a>
              <div>
                <p
                  className = 'text-sm md:text-base font-light text-gray-600'>
                  Year: { getDate(movie.release_date) }
                </p>
              </div>
            </div>
          </div>
          <div className = 'flex justify-end'>
            <StarIcon
              handleClick = { () => toggleMovieIdInFavourites(movie.id) }
              isFilled = { isMovieInFavourites }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

