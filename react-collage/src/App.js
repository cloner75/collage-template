import React from 'react';
import Home from './components/Home/';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
