export const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: false,
      };
    case 'GET_REPOS':
      return {
        ...state,
        repos: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        users: [],
        loading: false,
      };
    case 'SET_ALERT':
      return {
        ...state,
        alert: action.payload,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        alert: null,
      };

    default:
      return state;
  }
};
