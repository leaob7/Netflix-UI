import MainBanner from "../Banner/MainBanner";
import MainCardList from "../MainPage/Body/MainCardList";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
}))

function SeriesPageBody({ series }) {
  const classes = useStyles();

  return (
        <Grid container className={classes.root}>

            <MainBanner path="series"/> 

            <MainCardList dataList={series.popular} textField="Populares"/>

            <MainCardList dataList={series.popularTwo} textField="Em alta"/>

            <MainCardList dataList={series.popularThree} textField="Em destaque"/>

            <MainCardList dataList={ series.topRated } textField="Series premiadas" />

            <MainCardList dataList={ series.topRatedTwo } textField="Series conceituadas" />

        </Grid>
  )
}

export default SeriesPageBody;
