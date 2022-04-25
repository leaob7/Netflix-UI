import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, Button, Typography, CardActions } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      height: 800,
      width: '100%',
      backgroundSize: '100% 100%',
    }
  },
  btnDiv: {
    marginBottom: '15vh',
    paddingLeft: theme.spacing(4),
  },
  bannerTitle: {
    paddingLeft: theme.spacing(4),
    marginTop: '25vh',
    fontSize: '10vw',
    fontFamily: 'netflix',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: '-webkit-linear-gradient(#eee, #333)',
  },
  infoButton: {
    backgroundColor: 'gray',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1vw',
    padding: 10,
  },
  watchButton: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '1vw',
    backgroundColor: 'white',
    padding: 10,
  }
}));

function BannerCard({ latest }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const latestBackground = latest.poster_path ? latest.poster_path : latest.backdrop_path;
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={classes.root}
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${latestBackground})` }}
    >

        <Typography className={ classes.bannerTitle }>
          {latest.name}
        </Typography>

      <CardActions className={ classes.btnDiv }>

        <Button
          className={classes.watchButton}
          variant='contained'
        >
          <PlayArrowSharpIcon />
          Assistir
        </Button>

        <Button
          className={
            clsx(classes.expand,
            {[classes.expandOpen]: expanded }, classes.infoButton)
          }
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          variant='contained'
        >
          <InfoOutlinedIcon />
          Mais informações
        </Button>

      </CardActions>

    </Card>
  );
}

export default BannerCard;
