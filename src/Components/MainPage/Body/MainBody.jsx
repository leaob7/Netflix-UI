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

      <MainCardList dataList={ MoviesData.popular } textField="Filmes em alta" />

      <MainCardList dataList={ SeriesData.popular } textField="Series em alta" />

      <MainCardList dataList={ MoviesData.nowPlaying } textField="Lançamentos" />

      <MainCardList dataList={ MoviesData.topRated } textField="Filmes premiados" />

      <MainCardList dataList={ SeriesData.topRated } textField="Series premiadas" />

    </Grid>
  )
}

export default MainBody;