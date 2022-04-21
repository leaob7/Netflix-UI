import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, IconButton } from '@material-ui/core';
import { PlayCircleOutline, ControlPoint, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '13vh',
    width: '25vh',
    marginLeft: 15,
    marginRigth: 15,
    marginTop: 10,
    marginBottom: 30,
    transition: '1s'
  },
  rootHover: {
    height: '25vh',
    width: '30vh',
    marginLeft: 15,
    marginRigth: 15,
    transition: '1s'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
    // button spin
  },
  media: {
    height: '100%',
    width: '100%',
    backgroundSize: '25vh 14vh',
    transition: '1s'
  },
  mediaHover: {
    height: '15vh',
    width: '100%',
    backgroundSize: '31vh 26vh', 
    transition: '1s'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    padding: 2,
    backgroundColor: 'rgb(25, 25, 25)',
  },
  cardButtons: {
    color: 'white',
  }
}));

function MidiaCard({ movie }) {
  const classes = useStyles();
  const [cardStyle, setCardStyle] = useState(false);

  return (
    <Card
      className={ cardStyle ? classes.rootHover : classes.root }
      onMouseEnter={ () => setCardStyle(!cardStyle)}
      onMouseLeave={ () => setCardStyle(!cardStyle)}
    >

      <CardMedia
      style={ { backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}
      className={ cardStyle ? classes.mediaHover : classes.media }
      />

      <CardActions className={ classes.cardActions } disableSpacing>
          <IconButton
          className={classes.cardButtons}
          aria-label="Assistir"
          >
            <PlayCircleOutline />
          </IconButton>

          <IconButton className={classes.cardButtons} aria-label="Adicionar á minha lista">
            <ControlPoint />
          </IconButton>

            <ExpandMore className={classes.cardButtons}/>
        </CardActions>

    </Card>
  );
}

export default MidiaCard;
