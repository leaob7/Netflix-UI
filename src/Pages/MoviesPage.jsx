import React, { useEffect, useState } from 'react';
import MoviesRequests from '../utils/MoviesApiRequest';
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainPage/MainTopBar";
import MoviesPageBody from '../Components/MoviesPage/MoviesPageBody';

const moviesRequest = new MoviesRequests();

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100%',
    width: '100%'
  },
}));



function MoviesPage() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const popularM = await getRequest(moviesRequest.getPopular());
      const nowPlaying = await getRequest(moviesRequest.getNowPlaying());
      const topM = await getRequest(moviesRequest.getTopRated());

      setPopularMovies(popularM);
      setNowPlayingMovies(nowPlaying);
      setTopRatedMovies(topM);
    }

    fetchAll()
  }, [])

  const movies = {
    popular: popularMovies,
    nowPlaying: nowPlayingMovies,
    topRated: topRatedMovies
  }

  return (
    <div className={ classes.root }>
      <MainTopBar />
      <MoviesPageBody movies={movies}/>
      <Footer />
    </div>
  )
}

export default MoviesPage;