import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class About extends Component{

  render(){
    return (
      <div>
        <Hero backgroundImage="https://www.fickewirth.com/uploads/10133623_xl-laughing-business-people-small.jpg">
          <h1>Employee Directory</h1>
          <h2>View, search, and learn about your coworkers</h2>
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
                A website used to look at non-sensitive information about your co-workers. 
                Find out a bit about the department in a different state, country, or search for people to collaborate with. 
                <br/>
                <br/>
                Click "Search" to begin searching for your next professional connection. 
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;

