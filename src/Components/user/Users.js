import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spiner from '../layout/Spiner';
import { GithubContext } from '../../context/GithubContext';
const Users = () => {
  const { users, loading } = useContext(GithubContext);
  const user = users.map((u) => <UserItem key={u.id} user={u} />);
  if (loading) {
    return <Spiner />;
  } else {
    return <div style={userStyle}>{user}</div>;
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
