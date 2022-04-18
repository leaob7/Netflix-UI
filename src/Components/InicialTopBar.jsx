import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70
  },
  logo: {
    paddingLeft: 20,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: ''
  },
}));

function InitialTopBar () {
  const classes = useStyles();

    return (
        <AppBar position="static" color='transparent' className={ classes.root }>
          <Toolbar variant="dense">
            <Typography variant='h5' className={ classes.logo }>
              NETFLIX
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default InitialTopBar;