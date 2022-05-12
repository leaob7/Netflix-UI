class SeriesRequests {
  async getLatest() {
    return fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    .then((response) => response.json());
  }

  async getPopular(page) {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`)
    .then((response) => response.json());
  }

  async getTopRated(page) {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=${page}`)
    .then((response) => response.json());
  }

  async getDetails(tv_id) {
    return fetch(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    .then((response) => response.json());
  }

}

export default new SeriesRequests();
