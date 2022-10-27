import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container>
            <Row> 
                <Col lg="6">
                <h2>Categories</h2>
                </Col>
                <Col lg="6">
                <h2>Right Side Nav</h2>
                </Col>
            </Row>
       </Container>
    );
};

export default Courses;