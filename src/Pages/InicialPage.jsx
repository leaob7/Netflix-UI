import React from 'react';
import InitialTopBar from '../Components/InicialPage/InicialTopBar';
import InitialUserBody from '../Components/InicialPage/InicialUsersBody';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    height: '100vh'
  },
}));


function InicialPage () {
  const classes = useStyles();

    return (
      <div className={ classes.root }>
        <InitialTopBar />
        <InitialUserBody />
      </div>
    )
}

export default InicialPage;

