import React, { Component } from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/user/Users';
import User from './Components/user/User';
import UserRepos from './Components/user/UserRepos';
import Search from './Components/user/Search';
import Alert from './Components/user/Alert';
import { Route, Switch } from 'react-router-dom';
import About from './Components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  clearUser = () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <div>
                  <Search
                    searchUser={this.searchUser}
                    clearUser={this.clearUser}
                    showClearUser={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </div>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route exact path='/user/:login/repos' component={UserRepos} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
