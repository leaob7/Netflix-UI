class MoviesRequests {
  async getLatest() {
    return fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then((response) => response.json());
  }

  async getPopular() {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

  async getNowPlaying() {
    return fetch(`
    https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

  async getTopRated() {
    return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

  async getUpcoming() {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

}

export default MoviesRequests;
