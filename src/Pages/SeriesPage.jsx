import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Footer from "../Components/Footer";
import MainTopBar from "../Components/MainPage/MainTopBar";
import SeriesRequests from '../utils/SeriesApiRequest';
import SeriesPageBody from '../Components/SeriesPage/SeriesPageBody';

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
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const getRequest = async (request) => {
    const response = await request;
    return response.results;
  }

  useEffect(() => {
    const fetchAll = async () => {
      const popular = await getRequest(seriesRequest.getPopular());
      const top = await getRequest(seriesRequest.getTopRated());

      setPopularSeries(popular);
      setTopRatedSeries(top);
    }

    fetchAll()
  }, [])

  const series = {
    popular: popularSeries,
    topRated: topRatedSeries
  }

  return (
    <div className={ classes.root }>
      <MainTopBar />
      <SeriesPageBody series={series}/>
      <Footer />
  </div>
  )
}

export default SeriesPage;