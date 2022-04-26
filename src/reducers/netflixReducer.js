const INITIAL_STATE = {
      myList: []
}

function NetflixReducer(state= INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MYLIST':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      }
    default: 
      return state;
  }
}

export default NetflixReducer;