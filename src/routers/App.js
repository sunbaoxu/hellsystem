import React from 'react';
import { hot } from 'react-hot-loader';
import loadable from 'loadable-components'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import FrameBox  from '@/views/home/frame';
const Frame = loadable (()=>import('@/views/home/frame'));
const Login = loadable (()=>import('@/views/home/login'));


function App() {
  return (
    <Router basename="/hellsystem">
      <Route exact path="/login" component={Login}></Route>
      {/* <FrameBox  /> */}
      <Route  path="/infernal" component={Frame}></Route>
      {/* <Redirect from="/" exact to="/login" /> */}
    </Router>
  );
}

export default (process.env.NODE_ENV === 'development' ? hot(module)(App) : App);
// export default App;
