import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBanner from './MainBanner';
import MainCardList from './MainCardList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%' 
  },
  paper: {
    height: 140,
    width: 100,
  },
  card: {
    height: '13vh',
    width: '20vh',
    margin: 10,
  },
}));

function MainBody() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>

      <MainBanner />

      <MainCardList />

    </Grid>
  )
}

export default MainBody;