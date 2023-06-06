import React, { useState, useEffect } from "react";
import {Container,Row,Col,Form,Button, Alert, Table} from "react-bootstrap"
import {userData} from "../dummy/dummyData"
function HomePage(props) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
  };
  const [newInput, setNewInput] = useState(initialState);
  console.log("newInput", newInput);

 const [tableRecord, setTableRecord] = useState(userData);
 console.log("TableRecord", tableRecord);

 const [editInput, setEditInput] = useState();
 console.log("editInput", editInput);


 const [alert, setAlert] = useState(false);
 console.log("Alert", alert)
  const handleInput =(e) =>{
e.preventDefault ();
const { name, value } = e.target;
    const data = { ...newInput };
    data[name] = value;
    setNewInput(data);
  }

const addData =(e) => {
  // form fields validation
 const {firstname, lastname, email, gender} = newInput;
 if (firstname !== "" && lastname !== "" && email !== "" && gender !== "") {
  const newData = [...tableRecord] 
  newData.push(newInput);
  setTableRecord(newData);
 setNewInput(initialState);
setAlert(false)
}else{
  setAlert(true)
}
}

  return (
    <>
    <div className="m-5">
{alert &&(
  <Alert   variant = {"danger"} dismissible  
  className="custom-alert text-center"
            onClick={() => setAlert(false)}>
Please fill All mandatory fields
  </Alert>
)}
    </div>
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
    <Button className="btn btn-success" onClick={addData}>Add</Button>
    
    <Button className="btn btn-danger"> Edit</Button></Col>
    </Form>
    <Row xs={6} md={6} className="p-4">
      <Table striped bordered hover>
<thead>
    <tr>
      <th>S.NO</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>email</th>
      <th>Gender</th>
    </tr>
  
</thead>

</Table>
    </Row>
 
    
   </Container>
    </>
  )
}

export default HomePage