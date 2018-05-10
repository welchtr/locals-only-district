import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import {EventList} from '../../components/EventList'
import {Container, Card, CardTitle, CardSubtitle, CardText,CardColumns, CardBody, Row, Col} from 'reactstrap';
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

  class Home extends Component {
    // state = {
    //   events: []
    // };
    //
    // handleOnClick = () => {
    //
    //   // some action...
    //   // then redirect
    //   this.setState({redirect: true});
    // }



    // this.state.toggle = this.toggle.bind(this);
    //   this.state = {
    //     isOpen: false
    //   };

    // toggle() {
    //   this.setState({
    //     isOpen: !this.state.isOpen
    //   });
    // }


    // componentDidMount(){
    //   // Make a request for a user with a given ID
    //   axios.get('http://localhost:3000/events')
    //   .then(res => this.setState({ events: res.data }))
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //
    // }



    render() {

      return (
        <Container>
          <CardColumns>
          {this.props.events.map((event, index) => (
              <Card>
                <CardBody>
                  <Link to={"/about/" + index }><img src= {event.event_photo} onClick={this.handleOnClick}/></Link>
                  <CardTitle>{event.event_name}</CardTitle>
                  <CardSubtitle>{event.event_date}</CardSubtitle>
                  <CardSubtitle>{event.event_time}</CardSubtitle>
                  <CardSubtitle>{event.event_venue}</CardSubtitle>
                </CardBody>
              </Card>
          ))}
          </CardColumns>
        </Container>

      );

    }}

    export default Home;
