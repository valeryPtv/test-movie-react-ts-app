// Core
import React, { useState, useMemo } from 'react';
import clsx from 'clsx';

// Bus
import { useTopRatedMoviesQuery } from '../../../bus/movies';
import { useFavouriteMoviesStore } from '../../../bus/movies/hooks/useFavouriteMoviesStore';

// Components
import { MovieCard } from '../../components/MovieCard';
import { MoviesSortSelect } from '../../components/MoviesSortSelect/MoviesSortSelect';

export const MoviesList = () => {
  const [ sortIsDescending, setSortIsDescending ] = useState(true);
  const moviesResult = useTopRatedMoviesQuery();

  const moviesSorted = useMemo(() => moviesResult.sort((movieA, movieB) => {
    const diff = movieA.vote_average - movieB.vote_average;

    return sortIsDescending ? -diff : diff;
  }), [ moviesResult, sortIsDescending ]);

  const {
    favouriteMoviesIds,
    toggleMovieIdInFavourites,
  } = useFavouriteMoviesStore();

  return (
    <section className = 'common-container flex justify-center px-4 sm:px-8 py-3 sm:py-6 bg-gray-100'>
      <div className = 'max-w-4xl'>
        <h1 className = 'text-gray-700 text-xl md:text-4xl font-bold text-center text-white mb-5'>Top rated movies</h1>
        <div className = 'flex justify-end'>
          <MoviesSortSelect
            className = 'mb-5'
            setSortIsDescending = { setSortIsDescending }
          />
        </div>
        { moviesSorted.map((movie, index, arr) => (
          <MovieCard
            className = { clsx({ 'mb-6': index !== arr.length }) }
            isMovieInFavourites = { favouriteMoviesIds.includes(movie.id) }
            key = { movie.id }
            movie = { movie }
            toggleMovieIdInFavourites = { toggleMovieIdInFavourites }
          />
        )) }
      </div>
    </section>
  );
};
