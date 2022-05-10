import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainPage/MainTopBar";
import SeriesRequests from '../API/SeriesApiRequest';
import SeriesPageBody from '../Components/SeriesPage/SeriesPageBody';
import { useSelector } from 'react-redux';
import SearchBody from '../Components/Search/SearchBody';


const seriesRequest = new SeriesRequests();

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100%',
    width: '100%'
  },
}));



function SeriesPage() {
  const classes = useStyles();
  const [popularSeries, setPopularSeries] = useState([]);
  const [popularTwo, setPopularTwo] = useState([]);
  const [popularThree, setPopularThree] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [topRatedTwo, setTopRatedTwo] = useState([]);

  const globalSearch = useSelector((state) => state.NetflixReducer.globalSearch);


  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const top = await getRequest(seriesRequest.getTopRated(1));
      const topTwo = await getRequest(seriesRequest.getTopRated(2));
      const popular = await getRequest(seriesRequest.getTopRated(3));
      const popularPageTwo = await getRequest(seriesRequest.getTopRated(4));
      const popularPageThree = await getRequest(seriesRequest.getTopRated(5));

      setPopularSeries(popular);
      setPopularTwo(popularPageTwo);
      setPopularThree(popularPageThree);
      setTopRatedSeries(top);
      setTopRatedTwo(topTwo);
    }

    fetchAll()
  }, [])

  const series = {
    popular: popularSeries,
    popularTwo: popularTwo,
    popularThree: popularThree,
    topRated: topRatedSeries,
    topRatedTwo: topRatedTwo,
  }

  return (
    <div className={ classes.root }>
      <MainTopBar />
      { globalSearch ? <SearchBody /> : <SeriesPageBody series={series}/> }
      <Footer />
  </div>
  )
}

export default SeriesPage;