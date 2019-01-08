
// movies(page: Int): [Media]
export const moviesQuery = `
movies: [Media]
latestMovies: [Media]
movieById(id: ID!): Media
mostWatchedMovies: [Media]
`;
