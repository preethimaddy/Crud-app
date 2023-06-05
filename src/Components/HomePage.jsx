import React, { useState, useEffect } from "react";
import {Container,Row,Col,Form,Button, Alert} from "react-bootstrap"
function HomePage(props) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  };
  const [newInput, setNewInput] = useState(initialState);
  console.log("newInput", newInput);
  const handleInput =(e) =>{
e.preventDefault ();
const { name, value } = e.target;
    const data = { ...newInput };
    data[name] = value;
    setNewInput(data);
  }
  return (
    <>
   <Container>
    <Form className="form-input-area">
      <h3 className="text-center">Add New Data Form</h3>
    <Row>
      <Col xs={6} md={6}>
      <Form.Group className="mb-3" controlId="formfName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstname" placeholder="Enter your firstname" onChange = {handleInput} value={newInput?.firstname}/>
        <Form.Text className="text-muted">
                      Enter Your First Name
                    </Form.Text>
      </Form.Group>
      </Col>
      <Col xs={6} md={6}>
      <Form.Group className="mb-3" controlId="formlName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastname" placeholder="Enter your lastname" onChange = {handleInput} value={newInput?.lastname} />
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
        <Form.Control type="text" name="email" placeholder="Enter your email address" onChange = {handleInput} value={newInput?.email}/>
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
                      onChange={handleInput}
                      className="form-select" >
                         value={newInput?.gender}
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
    <Button className="btn btn-success">Add</Button>
    
    <Button className="btn btn-danger"> Edit</Button></Col>
    </Form>
    
   </Container>
    </>
  )
}

export default HomePage