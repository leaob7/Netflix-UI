const INITIAL_STATE = {
    movies: []
}

function NetflixReducer(state= INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        movies: [...state.movies, action.payload],
      }
    default: 
      return state;
  }
}

export default NetflixReducer;