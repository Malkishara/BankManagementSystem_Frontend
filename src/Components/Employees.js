import React from 'react'
import UserServices from '../services/UserService';
import { useState,useEffect } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Employees() {
  const [users,setUsers]=useState([])
    const [id,setID]=useState([])
    const [name,setName]=useState([])
    const [photo,setPhoto]=useState([])
    const [email,setEmail]=useState([])
    const [address,setAddress]=useState([])
    const [branchName,setbranchName]=useState([])
    const [bankName,setbankName]=useState([])

    useEffect(() => {

        //getUserData() 
        fetch("http://localhost:3000/emp_data").then(response => response.json())
        .then(data =>{
         // console.log(data);
         setUsers(data)
         
        })
      
      }, []);
    
    
    
    
  return (
    <div>
      <h3>Employee List</h3>
       <div>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th> Name</th>
          <th>Email</th>
          <th>Address</th>
          <th> Branch Name</th>
          <th>Bank Name</th>
        </tr>
      </thead>
      <tbody>
        
          {users.map((item)=>(
            <tr>
            <td>1</td>
        <td >{item.emp_photo}</td>
        <td >{item.emp_name}</td>
        <td >{item.emp_email}</td>
        <td >{item.emp_address}</td>
        <td >{item.branch_name}</td>
        <td >{item.bank_name}</td>
        </tr>
        ))}

          
       
        
      </tbody>
    </Table>
       </div>
      

      {/* {JSON.stringify(users)} */}

      
    </div>
  )
}

export default Employees
