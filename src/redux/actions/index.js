const addMyList = (payload) => ({ type: 'ADD_MYLIST', payload });

export const setGlobalSearch = (payload) => ({type: 'SET_GLOBAL_SEARCH', payload});

export const setSearchValue = (payload) => ({type: 'SET_SEARCH_VALUE', payload});

export const setSearchData = (payload) => ({type: 'SET_SEARCH_DATA', payload});

export default addMyList;