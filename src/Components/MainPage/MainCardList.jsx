import React from 'react';
import { Grid  } from '@material-ui/core';
import MidiaCard from './MidiaCard';


function MainCardList() {

  return (
    <Grid
    container
    direction="row"
    alignItems="center"
    >

      <MidiaCard />

    </Grid>
  );
}

export default MainCardList;
