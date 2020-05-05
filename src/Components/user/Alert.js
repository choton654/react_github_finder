import React from 'react';
const Alert = ({ alert }) => {
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
