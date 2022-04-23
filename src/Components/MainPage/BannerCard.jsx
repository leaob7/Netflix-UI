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
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}

export default BannerCard;
