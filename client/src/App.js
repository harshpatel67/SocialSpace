import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Login from './components/Join/login';
import Register from './components/Join/register';

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/chat" component={Chat} />
      <Redirect to="/"/>
    </Router>
  );
}

export default App;
