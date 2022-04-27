import React, { useEffect, useState } from 'react';
import MoviesRequests from '../API/MoviesApiRequest';
import SeriesRequests from '../API/SeriesApiRequest';
import MainTopBar from '../Components/MainPage/MainTopBar';
import MainBody from '../Components/MainPage/Body/MainBody';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100%',
    width: '100%'
  },
}));

const moviesRequest = new MoviesRequests();
const seriesRequest = new SeriesRequests();

function MainPage() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const popularM = await getRequest(moviesRequest.getPopular());
      const nowPlaying = await getRequest(moviesRequest.getNowPlaying());
      const topM = await getRequest(moviesRequest.getTopRated());

      const popularS = await getRequest(seriesRequest.getPopular());
      const topS = await getRequest(seriesRequest.getTopRated());

      setPopularMovies(popularM);
      setNowPlayingMovies(nowPlaying);
      setTopRatedMovies(topM);

      setPopularSeries(popularS);
      setTopRatedSeries(topS);
    }

    fetchAll()
  }, [])

  const movies = {
    popular: popularMovies,
    nowPlaying: nowPlayingMovies,
    topRated: topRatedMovies
  }

  const series = {
    popular: popularSeries,
    topRated: topRatedSeries,
  }

    return (
      <div className={ classes.root }>
        <MainTopBar />
        <MainBody MoviesData={ movies } SeriesData={ series }/>
        <Footer />
      </div>
    )
}

export default MainPage;