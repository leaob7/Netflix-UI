import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions/index';
import InitialTopBar from '../Components/InicialTopBar';
import InitialUserBody from '../Components/InicialUsersBody';
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
      <div maxWidth='false' className={ classes.root }>
        <InitialTopBar />
        <InitialUserBody />
      </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  dispatchMovies: (payload) => dispatch(addMovies(payload))});

export default connect(null, mapDispatchToProps)(InicialPage);

