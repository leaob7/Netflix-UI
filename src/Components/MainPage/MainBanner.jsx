import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

function MainBanner() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.banner}
    >
      {/* <div style={{ height: '100%', width: '100%' }}>
        <Typography>Title</Typography>
        <Typography>Sinopse</Typography>
        <Typography>Play Button</Typography>
        <Typography>Info Button</Typography>
      </div> */}
      <BannerCard />

    </Grid>
  )
}

export default MainBanner;