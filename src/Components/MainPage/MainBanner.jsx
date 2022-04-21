import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import SeriesRequests from '../../utils/SeriesApiRequest';
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

const seriesRequests = new SeriesRequests();

function MainBanner() {
  const [latest, setLatest] = useState({});
  const classes = useStyles();

  useEffect(() => {
    const getRequest = async () => {
      const result = await seriesRequests.getLatest();
      console.log(result);
      setLatest(result);
    }

    getRequest()
  }, [])

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