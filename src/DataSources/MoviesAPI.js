import { RESTDataSource } from 'apollo-datasource-rest'

export default class MoviesAPI extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = 'https://forja.tn/api/'
  }

  async getMovies (page) {
    const res = await this.post(`movies?extended=short`, {
      credentials: 'include',
      headers: {
        accept: '*/*',
        'accept-language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      referrer: 'https://forja.tn/movies',
      referrerPolicy: 'no-referrer-when-downgrade',
      body: 'page=1&title=the godfather&genre=&sortby=added',
      mode: 'cors'
    })
    console.log('movies ======>', page)
    return res.movies
  }
}

