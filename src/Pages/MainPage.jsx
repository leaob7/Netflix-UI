import React, { useEffect, useState } from 'react';
import MoviesRequests from '../API/MoviesApiRequest';
import SeriesRequests from '../API/SeriesApiRequest';
import MainTopBar from '../Components/MainTopBar';
import MainBody from '../Components/MainPage/MainBody';
import SearchBody from '../Components/Search/SearchBody';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchData } from '../redux/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100%',
    width: '100%'
  },
}));

function MainPage() {
  const classes = useStyles();
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const dispatch = useDispatch();

  const globalSearch = useSelector((state) => state.NetflixReducer.globalSearch);

  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const popularM = await getRequest(MoviesRequests.getPopular());
      const nowPlaying = await getRequest(MoviesRequests.getNowPlaying());
      const topM = await getRequest(MoviesRequests.getTopRated());

      dispatch(setSearchData([...popularM, ...nowPlaying, ...topM]))

      const topS = await getRequest(SeriesRequests.getTopRated(1));
      const popularS = await getRequest(SeriesRequests.getTopRated(5));

      setPopularMovies(popularM);
      setNowPlayingMovies(nowPlaying);
      setTopRatedMovies(topM);

      setPopularSeries(popularS);
      setTopRatedSeries(topS);
    }

    fetchAll();
  }, [dispatch])

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
        { globalSearch ? <SearchBody /> : <MainBody MoviesData={ movies } SeriesData={ series }/>}
        <Footer />
      </div>
    )
}

export default MainPage;