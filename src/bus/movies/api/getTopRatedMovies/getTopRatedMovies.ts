// Constants
import { BASE_URL } from '../../config';

// Types
import { GetTopRateMoviesResultType } from './types';

export const getTopRatedMovies = async (): Promise<GetTopRateMoviesResultType> => {
  const apiKey = process.env.REACT_APP_API_KEY_TMDB;
  const url = `${BASE_URL}/movie/top_rated?api_key=${apiKey}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status !== 200) {
    throw new Error(`Error getTopRatedMovies: url: ${url}, status: ${response.status}`);
  }

  return await response.json();
};
