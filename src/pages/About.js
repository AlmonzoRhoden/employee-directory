import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class About extends Component
{

  render(){
    return (
      <div>
        {/* Image from website */}
        <Hero backgroundImage="https://www.fickewirth.com/uploads/10133623_xl-laughing-business-people-small.jpg">
          <h1>Employee Directory</h1>
          <h2>View, search, and learn more about your coworkers. </h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To Employee Directory!</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <br/>
              <p>
                A website used to look at non-sensitive information about your co-workers. Find out more about the department in a different state, country, or search for people to collaborate with. <br/> <br/>
                Click <em>"Search Employees"</em> at the top of the page to begin searching for your next professional connection. 
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;

