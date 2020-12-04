import React from 'react';
import Home from './components/Home/';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Upload from './components/Upload';
import Profile from './components/User/profile'
import Conversation from './components/Conversation';
import GetNotification from './components/Notification/Get';
import SetNotification from './components/Notification/Set';
import GetClassify from './components/Classify/Get';
import Menu from './components/Home/menu';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/dashboard/user/upload' component={Upload} />
          <Route path='/dashboard/user/update' component={Profile} />
          <Route path='/dashboard/user/profile' component={Profile} />
          <Route path='/dashboard/user/conversation' component={Conversation} />
          <Route path='/dashboard/user/notifications' component={GetNotification} />
          <Route path='/dashboard/admin/get/classify' component={GetClassify} />
          <Route path='/dashboard/admin/set/notification' component={SetNotification} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
