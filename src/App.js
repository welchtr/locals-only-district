import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {EventList} from './components/EventList'
import {Container, Card, CardTitle, CardSubtitle, CardText,CardColumns, CardBody, Row, Col} from 'reactstrap';
import styles from './index.css';

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
      // <img src= "api-images/BCFEST.png" className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Locals-Only-District</h1>
       </header>

       <Container>
       <CardColumns>
      {this.state.events.map(event => (


               <Card>
               <CardBody>
               <img src= {event.event_photo} />
               <CardTitle>{event.event_name}</CardTitle>
               <CardSubtitle>{event.event_date}</CardSubtitle>
               <CardSubtitle>{event.event_time}</CardSubtitle>
               <CardSubtitle>{event.event_venue}</CardSubtitle>

               </CardBody>
               </Card>




))}
      </CardColumns>
      </Container>
      </div>



);

}}

export default App;
