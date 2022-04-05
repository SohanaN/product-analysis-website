import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyBarCharts from '../MyBarCharts/MyBarCharts';
import MyLineCharts from '../MyLineCharts/MyLineCharts';

const Dashboard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Line Chart</h2>
            <MyLineCharts></MyLineCharts>
          </Col>
          <Col md={6}>
            <h2>Bar Chart</h2>
            <MyBarCharts></MyBarCharts>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;