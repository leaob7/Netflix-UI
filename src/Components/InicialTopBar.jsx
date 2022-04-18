import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 70
  },
  logo: {
    paddingLeft: 30,
    paddingTop: 10,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontFamily: 'netflix',
    fontSize: '2vw'
  },
}));

function InitialTopBar () {
  const classes = useStyles();

    return (
        <AppBar position="static" color='transparent' className={ classes.root }>
          <Toolbar variant="regular">
            <Typography className={ classes.logo }>
              N E T F L I X
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default InitialTopBar;