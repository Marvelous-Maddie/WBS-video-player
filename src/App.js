import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Showcase from './components/Showcase';
import About from './components/About';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/try-it' component={Showcase}></Route>
          <Route exact path='/about' component={About}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
