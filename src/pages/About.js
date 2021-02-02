import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class About extends Component{

  render(){
    return (
      <div>
        <Hero backgroundImage="https://content.fortune.com/wp-content/uploads/2015/10/gettyimages-187921369-1.jpg">
          <h1>Employee Directory</h1>
          <h2>Learn more about your colleauges. </h2>
        </Hero>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To Employee Directory!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <p>
                This website can be used to look at non-sensitive information about your co-workers. Find out a bit about the department in a different state or country, or search for people to collaborate with. Click "Search" to begin searching for your next professional connection. 
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;

