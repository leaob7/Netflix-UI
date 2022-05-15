import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import MoviesRequests from '../../API/MoviesApiRequest';
import SeriesRequests from '../../API/SeriesApiRequest';
import BannerCard from './BannerCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%' 
  },
  banner:{
      color: 'white', 
      height: '80%',
      width: '100%',
    },
}));

function MainBanner({ path }) {
  const [latest, setLatest] = useState({});
  const classes = useStyles();
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 7) + 1;

    const getRequest = async (local) => {
      if (local === 'series') {
        const series = await SeriesRequests.getTopRated(2);
        setLatest(series.results[random]);
      }

      if (local === 'main' || local === 'movies') {
        const movies = await MoviesRequests.getPopular();
        setLatest(movies.results[random]);
      }

    }

    getRequest(path);
  }, [path])

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.banner}
    >
      <BannerCard latest={latest}/>
      
    </Grid>
  )
}

export default MainBanner;