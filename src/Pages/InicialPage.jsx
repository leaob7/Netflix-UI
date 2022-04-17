import React from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../actions/index';

class InicialPage extends React.Component {
  render() {
    return (
      <>Inicial Page</>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchMovies: (payload) => dispatch(addMovies(payload))});

export default connect(null, mapDispatchToProps)(InicialPage);

