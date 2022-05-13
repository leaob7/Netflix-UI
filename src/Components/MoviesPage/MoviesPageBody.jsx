import MainBanner from "../Banner/MainBanner";
import MainCardList from "../MainCardList";
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

            <MainCardList dataList={movies.popular} textField="Em alta" listType="movie"/>

            <MainCardList dataList={movies.popularTwo} textField="Em destaque" listType="movie"/>

            <MainCardList dataList={ movies.nowPlaying } textField="Lançamentos" listType="movie"/>

            <MainCardList dataList={ movies.topRated } textField="Filmes premiados" listType="movie"/>

            <MainCardList dataList={ movies.topRatedTwo } textField="Filmes conceituados" listType="movie"/>

        </Grid>
  )
}

export default MoviesPageBody;
