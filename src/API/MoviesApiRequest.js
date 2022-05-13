class MoviesRequests {
  async getLatest() {
    return fetch(`https://api.themoviedb.org/3/movie/latest?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR`)
    .then((response) => response.json());
  }

  async getPopular(page) {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR&page=${page}`)
    .then((response) => response.json());
  }

  async getNowPlaying() {
    return fetch(`
    https://api.themoviedb.org/3/movie/now_playing?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR&page=1`)
    .then((response) => response.json());
  }

  async getTopRated(page) {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR&page=${page}`)
    .then((response) => response.json());
  }

  async getUpcoming() {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR&page=1`)
    .then((response) => response.json());
  }

  async getDetails(movie_id) {
    return fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=e2a11eee9d189804182d267a87a4bea2&language=pt-BR`)
    .then((response) => response.json());
  }

}

export default new MoviesRequests();
