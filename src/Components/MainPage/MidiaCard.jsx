import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '13vh',
    width: '20vh',
    margin: 10,
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
    height: '13vh',
    width: '20vh',
  },
}));

function MidiaCard() {
  const classes = useStyles();

  return (
    <Card className={ classes.root }>

      <CardMedia 
      image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQOtj4pUXP9fzyUz5gVYkZt3_1Z1gCNsGEPmT5snx_Xxhp0UNo"
      className={ classes.media }
      />

    </Card>
  );
}

export default MidiaCard;
