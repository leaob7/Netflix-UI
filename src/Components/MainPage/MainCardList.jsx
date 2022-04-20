import React from 'react';
import { Grid, Typography  } from '@material-ui/core';
import MidiaCard from './MidiaCard';
import { NavigateBeforeSharp, NavigateNextSharp } from '@material-ui/icons';

function MainCardList({ movies, textField }) {

  return (
    <Grid
    style={{ display: 'flex', flexDirection: 'column' }}
    >

      <Typography variant='h5' color='primary'>{`${textField}`}</Typography>

      <Grid
        style={{ display: 'flex', alignItems: "center" }}
      >

        <NavigateBeforeSharp color='primary'/>

        { movies.slice(0, 10).map((movie) => (
          
          <MidiaCard key={movie.id} movie={movie} />
          
          )) }

        <NavigateNextSharp color='primary' />
      
      </Grid>
    </Grid>
  );
}

export default MainCardList;
