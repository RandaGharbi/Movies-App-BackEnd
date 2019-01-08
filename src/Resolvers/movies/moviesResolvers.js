import { find, map } from 'lodash';
import movies from '../../../movies.json'
import latestMovies from '../../../latest_movies.json'
import mostWatchedMovies from '../../../most-watched-movies.json'

// movies: (_source, _args, { dataSources }) => {
//   return dataSources.moviesAPI.getMovies(_args.page);
// },
export const moviesResolvers = {
  movies: () => {
    return movies.movies;
  },
  latestMovies: () => latestMovies,
  movieById: (_, { id }) => console.log(id) || find(movies.movies, { _id: id }),
  mostWatchedMovies: () => map(mostWatchedMovies, item => ({
    _id: item.mediaData._id,
    Title: item.mediaData.Title,
    Year: item.mediaData.Year,
    Genre: item.mediaData.Genre,
    Plot: item.mediaData.Plot,
    Poster: item.mediaData.Poster,
    imdbRating: item.mediaData.imdbRating
  }))
}
