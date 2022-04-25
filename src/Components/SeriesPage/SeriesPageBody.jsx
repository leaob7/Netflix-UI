import MainBanner from "../MainPage/Banner/MainBanner";
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

            <MainBanner /> 

            <MainCardList dataList={series.popular} textField="Em alta"/>

            <MainCardList dataList={ series.topRated } textField="Series premiadas" />

        </Grid>
  )
}

export default SeriesPageBody;
