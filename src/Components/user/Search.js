import React, { useState, useContext } from 'react';
import { GithubContext } from '../../context/GithubContext';
const Search = (props) => {
  const [text, settext] = useState('');
  const { users, clearUser, searchUser, setalert } = useContext(GithubContext);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setalert('Please Enter Something', 'light');
    } else {
      searchUser(text);
      settext('');
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        name='text'
        onChange={(e) => settext(e.target.value)}
        value={text}
        placeholder='Search for User'
      />
      <input type='submit' className='btn btn-dark btn-block' />
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUser}>
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
