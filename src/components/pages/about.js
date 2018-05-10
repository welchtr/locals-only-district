import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class About extends Component {
 state = {
   event_name: "",
   event_date: "",
   event_venue: "",
   event_time: "",
   event_photo: "",
 };

 // When the component mounts, load the next dog to be displayed
 componentDidMount() {
   console.log(this.state);
   const event = this.props.events[this.props.match.params.id]
   this.setState(event)
 }

render(){
  return (
    <div className="container">
      <div className="row">
        <Card className='col-12'>
          <div className="row">
          <CardImg className="col-4" width="100" src={this.state.event_photo}/>
          <CardBody className="col-8">
            <CardTitle>{this.state.event_name} </CardTitle>
            <CardSubtitle>{this.state.event_date}</CardSubtitle>
            <CardSubtitle>{this.state.event_venue}</CardSubtitle>
            <CardSubtitle>{this.state.event_time}</CardSubtitle>
            <a href={this.state.event_link}> <Button>Link</Button></a>
          </CardBody>
          </div>
      </Card>
    </div>
  </div>
  );

};

}


export default About;
