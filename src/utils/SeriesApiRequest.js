class SeriesRequests {
  async getLatest() {
    return fetch(`https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then((response) => response.json());
  }

  async getPopular() {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

  async getTopRated() {
    return fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then((response) => response.json());
  }

}

export default SeriesRequests;
