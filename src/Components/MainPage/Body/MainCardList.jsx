import React, { useState } from 'react';
import { Grid, Typography  } from '@material-ui/core';
import MidiaCard from '../MidiaCard';
import { NavigateBeforeSharp, NavigateNextSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  listTitle: {
    color: 'white',
    marginTop: 10,
    marginLeft: 17,
    fontSize: '1.5vw',
    fontWeight: 'bold'
  },
  listArrowRight: {
    position: 'absolute',
    width: 40,
    height: '23vh',
    right: 0,
    color: 'white',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
  },
  listArrowLeft: {
    position: 'absolute',
    width: 40,
    height: '23vh',
    left: 0,
    color: 'white',
    backgroundColor: 'rgb(0, 0, 0, 0.6)',
  }
})

function MainCardList({ movies: moviesDB, textField }) {
  const movies = moviesDB.slice(0, 10);
  const [scrollX, setScrollX] = useState(-400);
  const classes = useStyles();

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }

    setScrollX(x);
    // movies list margin responsively on arrow click
    // get the margin of the list and sum with the total window width
    // => scrolls half of the users window
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let moviesW = movies.length * 240;
    // the length of the movies list
    if((window.innerWidth - moviesW) > x) {
      x = (window.innerWidth - moviesW);
    }
    setScrollX(x);
  }

  return (
    <Grid
    style={{ display: 'flex', flexDirection: 'column' }}
    >

      <Typography
        className={classes.listTitle}
      >
        {`${textField}`}
      </Typography>

      <Grid
        style={{
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          marginLeft: scrollX,
        }}
      >

        <NavigateBeforeSharp className={classes.listArrowLeft} onClick={handleLeftArrow} />

        <NavigateNextSharp className={classes.listArrowRight} onClick={handleRightArrow} />

        { movies.map((movie) => (
          
          <MidiaCard key={movie.id} movie={movie} />
          
          )) }

      
      </Grid>
    </Grid>
  );
}

export default MainCardList;
