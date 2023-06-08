import React, { useState, useEffect } from "react";
import {Container,Row,Col,Form,Button, Alert, Table} from "react-bootstrap"
import {userData} from "../dummy/dummyData"
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios"
function HomePage(props) {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    
  };

  const [newPage, setNewPage] = useState(true);
  console.log("newPage", newPage);

  const [newInput, setNewInput] = useState(initialState);
  console.log("newInput", newInput);

 const [editPage, setEditPage] = useState(false);
  console.log("editPage", editPage);

 const [editInput, setEditInput] = useState(null);
 console.log("editInput", editInput);

  const [tableRecord, setTableRecord] = useState([]);
 console.log("TableRecord", tableRecord);

 const [editIndex, setEditIndex] = useState(null);
  console.log("editIndex", editIndex);

 const [alert, setAlert] = useState(false);
 console.log("Alert", alert)

   // function to get data
   const getData = async () => {
    try {
      const data1 = await axios.get(
        `https://64818d7329fa1c5c503198d5.mockapi.io/user`
      );
      const { data } = data1;
      setTableRecord(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

 

 //// handle  form input function
  const handleInput =(e) =>{
e.preventDefault ();
const { name, value } = e.target;
    const data = { ...newInput };
    data[name] = value;
    setNewInput(data);
  }

    // handle Edit form input function
    const handleEdit = (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      const data = { ...editInput };
      data[name] = value;
      setEditInput(data);
      
    };
const addData =(e) => {
  // form fields validation
 const {firstname, lastname, email, gender} = newInput;
 if (firstname !== "" && lastname !== "" && email !== "" && gender !== "") {
  const newData = [...tableRecord] 
  newData.push(newInput);
  setTableRecord(newData);
 setNewInput(initialState);
setAlert(false);
postData(newData)
}else{
  setAlert(true)
}
};
// post data
const postData = async (newData) => {
  const body = newInput;
  const data = await axios.post(
    `https://64818d7329fa1c5c503198d5.mockapi.io/user`,
    body
  );
  console.log("post-data", data);
};


/// editpage
const addEditData =(e) => {
  // form fields validation
 const {firstname, lastname, email, gender,id} = editInput;
 if (firstname !== "" && lastname !== "" && email !== "" && gender !== "") {
  const newData = [...tableRecord];
  newData[editIndex] = editInput;
  setTableRecord(newData);
 
setAlert(false);
cancelData();
edit(id)
}else{
  setAlert(true)
}
};

  // edit data to server
  const edit = async (id) => {
    try {
      const body = editInput;
      const result = await axios.put(
        `https://64818d7329fa1c5c503198d5.mockapi.io/user/${id}`,
        body
      );
    } catch (error) {
      console.error(error);
    }
  };

 
// clear the data
const clearData = () => {
setNewInput (initialState);
}

// clear editData Func
const clearEditData = () => {
  setEditInput(initialState);
};

//cancel the editpage
const cancelData = ()=> {
  setNewPage(true)
  setEditIndex(null)
setEditPage(false)
}
// triggering the edit form
const editTrigger = (index) => {
  const editData = tableRecord[index];
  setEditInput(editData);
  setNewPage(false);
  setEditPage(true);
  setEditIndex(index);
};
//Delete data from the table
const deleteTableData = (index,id) =>{
  const data =[...tableRecord];
  data.splice(index,1);
  setTableRecord(data);
  deleteData(id);
};

  // function to delete all records
  const deleteData = async (id) => {
    try {
      await axios.delete(
        `https://64818d7329fa1c5c503198d5.mockapi.io/user/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <div className="m-3">
{alert &&(
  <Alert   variant = {"danger"} dismissible  
  className="custom-alert text-center"
            onClick={() => setAlert(false)}>
      Please fill All mandatory fields*
  </Alert>
)}
    </div>
   <Container>
 {newPage ? (
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
                     className="form-select" value={newInput?.gender} >
                        
                     <option value="">--select--</option>
                     <option value="Male">Male</option>
                     <option value="Female">Female</option>
                     
                   </select>
       <Form.Text className="text-muted">
                     Please select the gender from dropdown
                   </Form.Text>
     </Form.Group>
     </Col>
   </Row>
   <Col xs={12} className="text-center">
   <Button className="btn btn-success" onClick={addData}>Add</Button>
   
   <Button className="btn btn-danger" onClick={clearData}> Clear</Button>
   
   </Col>
   </Form>
  
 ):("")
 }
     {editPage ? (
     <Form className="form-input">
     <h3 className="text-center">Edit old Data Form</h3>
   <Row>
     <Col xs={6} md={6}>
     <Form.Group className="mb-3" controlId="formfName">
       <Form.Label>First Name</Form.Label>
       <Form.Control type="text" name="firstname" placeholder="Enter your firstname" onChange = {handleEdit} value={editInput?.firstname}/>
       <Form.Text className="text-muted">
                     Enter Your First Name
                   </Form.Text>
     </Form.Group>
     </Col>
     <Col xs={6} md={6}>
     <Form.Group className="mb-3" controlId="formlName">
       <Form.Label>Last Name</Form.Label>
       <Form.Control type="text" name="lastname" placeholder="Enter your lastname" onChange = {handleEdit} value={editInput?.lastname} />
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
       <Form.Control type="text" name="email" placeholder="Enter your email address" onChange = {handleEdit} value={editInput?.email}/>
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
                     onChange={handleEdit}
                     className="form-select" value={editInput?.gender} >
                        
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
   <Button className="btn btn-success" onClick={addEditData}>Submit</Button>
   
   <Button className="btn btn-danger" onClick={clearEditData}> Clear</Button>

   <Button className="m-2 btn btn-warning" onClick={cancelData}>
                    Cancel
                  </Button>
                  </Col>

   </Form>
 ):("")
 }
    <Row xs={6} md={6} className="p-4">
      <Table striped bordered hover>
<thead>
    <tr>
      <th>S.NO</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>email</th>
      <th>Gender</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  
</thead>
<tbody>
{tableRecord?.length > 0 &&
                  tableRecord.map(({ firstname, lastname, email, gender }, index) => {
return (
  
  <tr  key={index}>
  <td>{index+1}</td>
  <td>{firstname}</td>
  <td>{lastname}</td>
  <td>{email}</td>
  <td>{gender}</td>
  <td onClick={() =>editTrigger(index)}
  className="cursor-pointer">
    <BiEdit />
  </td >
  <td
                  className="cursor-pointer"  
                  onClick={() => deleteTableData(index)}
                   
                        >
                          <MdDeleteForever />
                        </td>
 
  </tr>
)
                  }
               ) }
</tbody>

</Table>
    </Row>
 
    
   </Container>
    </>
  )
}

export default HomePage