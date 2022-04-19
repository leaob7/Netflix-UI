import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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
  control: {
    padding: theme.spacing(2),
  },
  card: {
    height: '13vh',
    width: '20vh',
    margin: 10,
  },
  banner:{
      color: 'white', 
      border: 'solid white 1px',
      height: '80%',
      width: '100%' 
    },
}));

function MainBody() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>

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
        {/* component banner */}


      </Grid>

      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ color: 'white' }}
      >
          <img  src='' alt='card' className={classes.card} />
          <img  src='' alt='card' className={classes.card} />
          {/* Component List -> component card */}

      </Grid>

    </Grid>
  )
}

export default MainBody;