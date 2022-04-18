import React from 'react';
import MoviesRequest from '../utils/MoviesApiRequest';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      latestMovies: []
    }
  }

  getRequest = async (state, request) => {
    const response = await request;
    this.setState({ [state]: response.results })
  }

  async componentDidMount() {
    await this.getRequest('latestMovies', MoviesRequest.getPopular());
  }
  render() {
    return (
      <>MainPage</>
    )
  }
}

export default MainPage;