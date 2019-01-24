import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Detail from './components/detail/DetailPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={Detail} />
        </Switch>
     
      </div>
    );
  }
}

export default App;
