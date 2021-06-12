// Core
import { useState, useEffect, useCallback } from 'react';

// Types
import { ToggleMovieIdInFavouritesType } from './types';

export const useFavouriteMoviesStore = () => {
  const [ favouriteMoviesIds, setFavouriteMoviesIdsState ] = useState<number[]>([]);

  const toggleMovieIdInFavourites: ToggleMovieIdInFavouritesType = useCallback((movieId: number) => {
    let newMoviesIdsArray = null;

    if (favouriteMoviesIds.includes(movieId)) {
      newMoviesIdsArray = favouriteMoviesIds.filter((existingId) => existingId !== movieId);
    } else {
      newMoviesIdsArray = favouriteMoviesIds.concat(movieId);
    }
    setFavouriteMoviesIdsState(newMoviesIdsArray);
    localStorage.setItem('favouriteMoviesIds', JSON.stringify(newMoviesIdsArray));
  }, [ favouriteMoviesIds ]);

  useEffect(() => {
    const localStorageMoviesIds = localStorage.getItem('favouriteMoviesIds');
    if (localStorageMoviesIds) {
      const parsedIds = <number[]>JSON.parse(localStorageMoviesIds);
      parsedIds.length && setFavouriteMoviesIdsState(parsedIds);
    }
  }, []);

  return {
    favouriteMoviesIds,
    toggleMovieIdInFavourites,
  };
};
