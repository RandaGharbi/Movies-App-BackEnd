import { find, map } from 'lodash';
import series from '../../../series.json'
import latestSeries from '../../../latest-series.json'
import mostWatchedSeries from '../../../most-watched-serie.json'

export const seriesResolvers = {
  series: () => series.series,
  latestSeries: () => map(latestSeries, item => ({
    _id: item.details._id,
    Title: item.serie.Title,
    Year: item.details.Year,
    Genre: item.details.Genre,
    Plot: item.details.Plot,
    Poster: item.details.Poster,
    imdbRating: item.details.imdbRating
  })),
  serieById: (_, { id }) => find(series.series, { _id: id }),
  mostWatchedSeries: () => map(mostWatchedSeries, item => ({
    _id: item.mediaData._id,
    Title: item.mediaData.Title,
    Year: item.mediaData.Year,
    Genre: item.mediaData.Genre,
    Plot: item.mediaData.Plot,
    Poster: item.mediaData.Poster,
    imdbRating: item.mediaData.imdbRating
  }))
}
