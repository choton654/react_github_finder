import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = { text: '' };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser: PropTypes.func.isRequired,
    showClearUser: PropTypes.bool.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter Something', 'light');
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClearUser, clearUser } = this.props;
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='text'
          onChange={this.onChange}
          value={this.state.text}
          placeholder='Search for User'
        />
        <input type='submit' className='btn btn-dark btn-block' />
        {showClearUser && (
          <button className='btn btn-light btn-block' onClick={clearUser}>
            Clear
          </button>
        )}
      </form>
    );
  }
}

export default Search;
