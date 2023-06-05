import React, { useState, useEffect } from "react";
import {Container,Row,Col,Form,Button, Alert} from "react-bootstrap"
function HomePage() {

  return (
    <>
   <Container>
    <Form className="form-input-area">
      <h3 className="text-center">Add New Data Form</h3>
    <Row>
      <Col xs={6} md={6}>
      <Form.Group className="mb-3" controlId="formfName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstname" placeholder="Enter your firstname" />
        <Form.Text className="text-muted">
                      Enter Your First Name
                    </Form.Text>
      </Form.Group>
      </Col>
      <Col xs={6} md={6}>
      <Form.Group className="mb-3" controlId="formlName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastname" placeholder="Enter your lastname" />
        <Form.Text className="text-muted">
                      Enter Your Last Name
                    </Form.Text>
      </Form.Group>
      </Col>
    </Row>
    <Row>
      
      <Col xs={6} md={6}>
      <Form.Group className="mb-3" controlId="formbasicemail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter your email address" />
        <Form.Text className="text-muted">
                      We will Never share your Address to Anyone Else!
                    </Form.Text>
      </Form.Group>
      </Col>
      <Col xs={6} md={4}>
      <Form.Group className="mb-3" controlId="formbasicgender">
        <Form.Label>Gender</Form.Label>
        <select
                      name="gender"
                      className="form-select" >
                      <option value="">--select--</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
        <Form.Text className="text-muted">
                      Enter Your Last Name
                    </Form.Text>
      </Form.Group>
      </Col>
    </Row>
    <Col xs={12} className="text-center">
    <Button className="btn btn-sucess">Add</Button>
    
    <Button className="btn btn-danger"> Edit</Button></Col>
    </Form>
    
   </Container>
    </>
  )
}

export default HomePage