import React from 'react'
import { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import '../Styles/Employee.css'


function Employees() {
  const [users,setUsers]=useState([])
    

    useEffect(() => {

        //getUserData() 
        fetch("http://localhost:3000/emp_data").then(response => response.json())
        .then(data =>{
         // console.log(data);
         setUsers(data)
         
        })
      
      }, []);
    
    
    
    
  return (
    <div className='list'>
      <div className='bank'>
      <p>Bank Management System</p>
    </div>
      <div className='title'>
      <p>Employee List</p>
      </div>
      
       <div>
       <Table striped bordered hover size="sm" className='data' style={{ width: '90%' }}>
      <thead>
        <tr>
        <th>No</th>
          <th>Photo</th>
          <th> Name</th>
          <th>Email</th>
          <th>Address</th>
          <th> Branch Name</th>
          <th>Bank Name</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        
          {users.map((item,i)=>(
      
        <tr>
          
          <td >{i+1}</td>
        <td ><img src={item.emp_photo}  alt="React Image" style={{ width:"100px" ,height:"100px"}}/></td>
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
