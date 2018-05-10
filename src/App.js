import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {EventList} from './components/EventList'
import {Container, Card, CardTitle, CardSubtitle, CardText,CardColumns, CardBody, Row, Col} from 'reactstrap';
import styles from './index.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class App extends Component {
  state = {
    events: []
  };

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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Locals-Only-District</NavbarBrand>
         </Navbar>
         <Router>
           <div>
              <Route exact path="/about/:id" component={({match}) => <About match={match} events={this.state.events}/>} />
              <Route exact path="/" component={() => <Home events={this.state.events} />} />
            </div>
         </Router>
       </div>
    );
}}

export default App;
