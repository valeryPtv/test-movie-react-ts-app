// Core
import { useState, useEffect, useCallback } from 'react';

// Api
import { getTopRatedMovies } from './api/getTopRatedMovies/getTopRatedMovies';

// Types
import {
  GetTopRateMoviesResultType,
  TopRatedMovieType,
} from './api/getTopRatedMovies/types';

type UseTopRatedMoviesQueryType = () => TopRatedMovieType[] | []

export const useTopRatedMoviesQuery: UseTopRatedMoviesQueryType = () => {
  const [ movies, setMovies ] = useState<GetTopRateMoviesResultType>();

  const getTopRatedMoviesHandler = useCallback(async () => {
    try {
      const result = await getTopRatedMovies();
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  }, [ getTopRatedMovies ]);

  useEffect(() => {
    getTopRatedMoviesHandler();
  }, [ getTopRatedMoviesHandler ]);

  return movies?.results || [];
};
