import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function InitialTopBar () {

    return (
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6">
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

export default InitialTopBar;