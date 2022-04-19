import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20vh',
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  card: {
    display: 'flex',
    flexDirection: 'colunm',
    height: '10vw',
    width: '10vw',
    maxWidth: 200,
    '&:hover': {
      border: 'solid white',
    },
    margin: 20
  },
  media: {
    height: '10vw',
    width: '10vw',
  },
  title: {
    color: "white",
    fontSize: '4vw'
  },
}));

function InitialUserBody () {
  const classes = useStyles();
    return (
      <div className={ classes.root }>

        <Typography className={ classes.title }>
          Quem está assistindo ?
        </Typography>

        <Link to="/browser" className={ classes.link }>
          
          <Card className={ classes.card }>
            <CardActionArea>

              <CardMedia
                className={ classes.media }
                image="https://avatars.githubusercontent.com/u/6759280?v=4"
                title="Convidado"
              />

            </CardActionArea>
          </Card>

          <Typography style={{ color: "GrayText", fontSize: '1.5vw', }}>
            Convidado
          </Typography>
        
        </Link>
        
      
      </div>
    )
}

export default InitialUserBody;