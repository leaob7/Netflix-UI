import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%' 
  },
  banner:{
      color: 'white', 
      border: 'solid white 1px',
      height: '80%',
      width: '100%' 
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
      <div style={{ height: '100%', width: '100%' }}>
        <Typography>Title</Typography>
        <Typography>Sinopse</Typography>
        <Typography>Play Button</Typography>
        <Typography>Info Button</Typography>
      </div>

    </Grid>
  )
}

export default MainBanner;