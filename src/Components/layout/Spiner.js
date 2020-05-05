import React from 'react';
import Spinner from './spinner.gif';
const Spiner = () => (
  <div>
    <img
      src={Spinner}
      alt='Loading...'
      style={{ width: '200px', display: 'block', margin: 'auto' }}
    />
  </div>
);
export default Spiner;
