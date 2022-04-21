import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardActions, IconButton } from '@material-ui/core';
import { PlayCircleOutline, ControlPoint, ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    // height: '13vh',
    // width: '25vh',
    height: 200,
    width: 200,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 0,
    marginBottom: 30,
    transition: '1s'
  },
  rootHover: {
    // height: '25vh',
    // width: '30vh',
    height: 350,
    width: 300,
    marginLeft: 15,
    marginRight: 15,
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
    // backgroundSize: '25vh 14vh',
    backgroundPosition: 'center bottom',
    transition: '1s'
  },
  mediaHover: {
    // height: '15vh',
    height: '30vh',
    width: '100%',
    // backgroundSize: '31vh 26vh',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    transition: '1s'
  },
  cardActions: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
        <div>
          <IconButton
          className={classes.cardButtons}
          aria-label="Assistir"
          >
            <PlayCircleOutline />
          </IconButton>

          <IconButton className={classes.cardButtons} aria-label="Adicionar á minha lista">
            <ControlPoint />
          </IconButton>
        </div>
        
        <IconButton className={classes.cardButtons} aria-label="Mais informações">
            <ExpandMore />
        </IconButton>

        </CardActions>

    </Card>
  );
}

export default MidiaCard;
