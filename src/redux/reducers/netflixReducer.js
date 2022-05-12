const INITIAL_STATE = {
      myList: [],
      globalSearch: false,
      searchValue: '',
      searchData: [],
}

function NetflixReducer(state= INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_MYLIST':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      }
      case 'SET_GLOBAL_SEARCH':
        return {
          ...state,
          globalSearch: action.payload,
        }
        case 'SET_SEARCH_VALUE': {
            return {
              ...state,
              searchValue: action.payload,
            }
        }
        case 'SET_SEARCH_DATA': {
          return {
            ...state,
            searchData: action.payload,
          }
        }
    default: 
      return state;
  }
}

export default NetflixReducer;