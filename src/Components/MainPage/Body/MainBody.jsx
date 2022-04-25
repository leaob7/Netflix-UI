import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBanner from '../Banner/MainBanner';
import MainCardList from './MainCardList';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden'
  },
}));

function MainBody({ MoviesData, SeriesData }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>

      <MainBanner /> 

      <MainCardList movies={ MoviesData.popular } textField="Filmes em alta" />

      <MainCardList movies={ SeriesData.popular } textField="Series em alta" />

      <MainCardList movies={ MoviesData.nowPlaying } textField="Lançamentos" />

      <MainCardList movies={ MoviesData.topRated } textField="Filmes premiados" />

      <MainCardList movies={ SeriesData.topRated } textField="Series premiadas" />

    </Grid>
  )
}

export default MainBody;