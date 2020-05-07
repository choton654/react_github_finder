import React from 'react';
import Navbar from './Components/layout/Navbar';
import Users from './Components/user/Users';
import User from './Components/user/User';
import UserRepos from './Components/user/UserRepos';
import Search from './Components/user/Search';
import Alert from './Components/user/Alert';
import { Route, Switch } from 'react-router-dom';
import About from './Components/pages/About';
import GithubProvider from './context/GithubContext';

import './App.css';
import NotFound from './notfound';

const App = (props) => {
  return (
    <GithubProvider>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert />
          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <div>
                  <Search />
                  <Users />
                </div>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route exact path='/user/:login/repos' component={UserRepos} />
            <Route exact path='/:notfound' component={NotFound} />
          </Switch>
        </div>
      </div>
    </GithubProvider>
  );
};

export default App;

// const searchUser = async ( text ) =>
// {
//   setloading( true );
//   const res = await axios.get(
//     `https://api.github.com/search/users?q=${ text }`
//   );
//   setUsers( res.data.items );
//   setloading( false );
// };

// const clearUser = () =>
// {
//   setUsers( [] );
//   setloading( false );
// };

// const setalert = ( msg, type ) =>
// {
//   setAlert( { msg, type } );
//   setTimeout( () =>
//   {
//     setAlert( null );
//   }, 3000 );
// };

// const [ users, setUsers ] = useState( [] );
// const [ alert, setAlert ] = useState( null );
// const [ loading, setloading ] = useState( false );
