import React, { useContext, useEffect } from 'react';
import { GithubContext } from '../../context/GithubContext';
const UserRepos = (props) => {
  const { repos, getRepos } = useContext(GithubContext);
  useEffect(() => {
    const { login } = props.match.params;
    getRepos(login);
  });

  return (
    <div>
      {repos.map((repo) => (
        <div className='card'>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      ))}
    </div>
  );
};

export default UserRepos;
