import React from 'react';
import { hot } from 'react-hot-loader';
// import logo from './logo.svg';
import './App.css';
import loadable from 'loadable-components'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = loadable (()=>import('@/views/home/home'));
const Login = loadable (()=>import('@/views/home/login'));

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </Router>
  );
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
// export default App;
