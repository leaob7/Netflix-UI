import React from 'react';
import { Grid, Typography  } from '@material-ui/core';
import MidiaCard from './MidiaCard';
import { NavigateBeforeSharp, NavigateNextSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listTitle: {
    color: 'white',
    marginTop: 10,
    marginLeft: 63,
    fontSize: '1.5vw'
  }
})

function MainCardList({ movies, textField }) {
  const classes = useStyles();

  return (
    <Grid
    style={{ display: 'flex', flexDirection: 'column' }}
    >

      <Typography
        variant='h5'
        color='primary'
        className={classes.listTitle}
      >
        {`${textField}`}
      </Typography>

      <Grid
        style={{ display: 'flex', alignItems: "center" }}
      >

        <NavigateBeforeSharp color='primary'/>

        <NavigateNextSharp color='primary' />

        { movies.slice(0, 10).map((movie) => (
          
          <MidiaCard key={movie.id} movie={movie} />
          
          )) }

      
      </Grid>
    </Grid>
  );
}

export default MainCardList;
