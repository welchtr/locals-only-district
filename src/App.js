import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {EventList} from './components/EventList'
import {Card, CardTitle, CardText, Row, Col} from 'reactstrap'

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
          <div className = "container">
          <Row>
           {this.state.events.map(event => (
             <Col sm="3">
               <Card body>
                 <CardTitle>{event.event_name}</CardTitle>
                 {/* <Button><a href={winery.winery_url} target="_blank">DRINK HERE</a></Button> */}
               </Card>
             </Col>
           ))}
         </Row>
         </div>

        </p>
      </div>
    );
  }
}

export default App;
