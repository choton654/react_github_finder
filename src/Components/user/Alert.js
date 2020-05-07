import React, { useContext } from 'react';
import { GithubContext } from '../../context/GithubContext';

const Alert = () => {
  const { alert } = useContext(GithubContext);
  if (alert !== null) {
    return (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    );
  } else {
    return null;
  }
};

export default Alert;
