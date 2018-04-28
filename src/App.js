import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {EventList} from './components/EventList'

class App extends Component {
  state = {
    events: []
  }

  componentDidMount(){
    // Make a request for a user with a given ID
    axios.get('http://localhost:3000/events')
      .then(res => this.setState({ events: res.data }))
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <EventList events={this.state.events} />

        </p>
      </div>
    );
  }
}

export default App;
