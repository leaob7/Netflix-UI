import React, { useEffect, useState } from 'react';
import MoviesRequests from '../API/MoviesApiRequest';
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainTopBar";
import MoviesPageBody from '../Components/MoviesPage/MoviesPageBody';
import { useSelector } from 'react-redux';
import SearchBody from '../Components/Search/SearchBody';

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
  const [popularTwo, setPopularTwo] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [TopRatedTwo, setTopRatedTwo] = useState([]);

  const globalSearch = useSelector((state) => state.NetflixReducer.globalSearch);


  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const popularM = await getRequest(MoviesRequests.getPopular(1));
      const popularTwo = await getRequest(MoviesRequests.getPopular(2));
      const nowPlaying = await getRequest(MoviesRequests.getNowPlaying());
      const topM = await getRequest(MoviesRequests.getTopRated(1));
      const topTwo = await getRequest(MoviesRequests.getTopRated(2));

      setPopularMovies(popularM);
      setPopularTwo(popularTwo);

      setNowPlayingMovies(nowPlaying);

      setTopRatedMovies(topM);
      setTopRatedTwo(topTwo);
    }

    fetchAll()
  }, [])

  const movies = {
    popular: popularMovies,
    popularTwo: popularTwo,
    nowPlaying: nowPlayingMovies,
    topRated: topRatedMovies,
    topRatedTwo: TopRatedTwo,
  }

  return (
    <div className={ classes.root }>
      <MainTopBar />
      {globalSearch ? <SearchBody /> : <MoviesPageBody movies={movies}/>}
      <Footer />
    </div>
  )
}

export default MoviesPage;