import React, { Component } from 'react';
import axios from 'axios';

class UserRepos extends Component {
  state = {
    repos: [],
  };
  async componentDidMount() {
    const { login } = this.props.match.params;
    const res = await axios.get(`https://api.github.com/users/${login}/repos`);
    console.log(res.data);
    this.setState({
      repos: res.data,
    });
  }

  render() {
    const { repos } = this.state;
    return (
      <div>
        {repos.map((repo) => (
          <div className='card'>
            <a href={repo.html_url}>{repo.name}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default UserRepos;
//
