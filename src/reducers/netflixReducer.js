const INITIAL_STATE = {
  state: {
    movies: [],
  },
}

function NetflixReducer(state= INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: [...state.movies, action.state]
      }
    default: 
      return state;
  }
}

export default NetflixReducer;