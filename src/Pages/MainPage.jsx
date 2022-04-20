import React, { useEffect, useState } from 'react';
import MoviesRequest from '../utils/MoviesApiRequest';
import MainTopBar from '../Components/MainPage/MainTopBar';
import MainBody from '../Components/MainPage/MainBody';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'colunm',
    background: theme.palette.primary.dark,
    height: '100%',
    width: '100%'
  },
}));

const moviesRequest = new MoviesRequest();

function MainPage() {
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
      const popular = await getRequest(moviesRequest.getPopular());
      const nowPlaying = await getRequest(moviesRequest.getNowPlaying());
      const top = await getRequest(moviesRequest.getTopRated());

      setPopularMovies(popular);
      setNowPlayingMovies(nowPlaying);
      setTopRatedMovies(top);
    }

    fetchAll()
  }, [])

  const movies = {
    popular: popularMovies,
    nowPlaying: nowPlayingMovies,
    topRated: topRatedMovies
  }

  // const series = {
  //   popular: ,
  //   topRated: ,
  // }

    return (
      <div className={ classes.root }>
        <MainTopBar />
        <MainBody MoviesData={ movies } />
      </div>
    )
}

export default MainPage;