import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBanner from './MainBanner';
import MainCardList from './MainCardList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
    overflow: 'hidden'
  },
}));

function MainBody({ MoviesData }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>

      <MainBanner /> 

      <MainCardList movies={ MoviesData.popular } textField="Em alta" />

      <MainCardList movies={ MoviesData.nowPlaying } textField="Lançamentos" />

      <MainCardList movies={ MoviesData.topRated } textField="Filmes premiados" />

    </Grid>
  )
}

export default MainBody;