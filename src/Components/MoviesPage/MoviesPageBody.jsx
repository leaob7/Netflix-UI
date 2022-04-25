import MainBanner from "../MainPage/Banner/MainBanner";
import MainCardList from "../MainPage/Body/MainCardList";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
}))
function MoviesPageBody({ movies }) {
  const classes = useStyles();

  return (
        <Grid container className={classes.root}>

            <MainBanner path="movies"/> 

            <MainCardList dataList={movies.popular} textField="Em alta"/>

            <MainCardList dataList={ movies.nowPlaying } textField="Lançamentos" />

            <MainCardList dataList={ movies.topRated } textField="Filmes premiados" />

        </Grid>
  )
}

export default MoviesPageBody;
