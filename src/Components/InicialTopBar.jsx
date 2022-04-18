import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


function InitialTopBar () {
    const classes = useStyles();

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default InitialTopBar;