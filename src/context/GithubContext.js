import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { GithubReducer } from './GithubReducers';
export const GithubContext = createContext();

const GithubProvider = (props) => {
  const initState = {
    users: [],
    alert: null,
    loading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initState);

  const searchUser = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({
      type: 'SEARCH_USERS',
      payload: res.data.items,
    });
  };

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const setalert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 3000);
  };
  const clearUser = () => {
    dispatch({ type: 'CLEAR_USER' });
  };
  const getUser = (login) => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => dispatch({ type: 'GET_USER', payload: res.data }))
      .catch((err) => console.log(err));
  };
  const getRepos = (login) => {
    axios
      .get(`https://api.github.com/users/${login}/repos`)
      .then((res) => dispatch({ type: 'GET_REPOS', payload: res.data }))
      .catch((err) => console.log(err));
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        alert: state.alert,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUser,
        setalert,
        clearUser,
        getUser,
        getRepos,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
