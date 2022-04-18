import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions/index';
import InitialTopBar from '../Components/InicialTopBar';
import InitialUserBody from '../Components/InicialUsersBody';

class InicialPage extends React.Component {
  render() {
    return (
      <>
        <InitialTopBar />
        <InitialUserBody />
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchMovies: (payload) => dispatch(addMovies(payload))});

export default connect(null, mapDispatchToProps)(InicialPage);

