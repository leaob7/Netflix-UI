import React from 'react';
import { Grid  } from '@material-ui/core';
import MidiaCard from './MidiaCard';


function MainCardList({ movies }) {
  const { popular } = movies;
  return (
    <Grid
    container
    direction="row"
    alignItems="center"
    >

      { popular.slice(0, 10).map((movie) => (
        
        <MidiaCard key={movie.id} movie={movie} />

      )) }

    </Grid>
  );
}

export default MainCardList;
