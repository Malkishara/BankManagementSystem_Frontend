import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory,Link} from 'react-router-dom';
import { useState,useEffect } from 'react';


function Login() {
  
//const navigate=useNavigate();
const history=useHistory();

  const [email,setEmail]=useState([])
  const [password,setPassword]=useState([])

  
  const login=() => {
    
    
    //console.log(email);
    //console.log(password);
    fetch("http://localhost:3000/login").then(response => response.json())
  .then(data =>{
    console.log(data);
    
   var navi; 
    for(var i=0;i<data.length;i++){
      if(data[i].emp_email==email && data[i].emp_password==password){
        console.log("True");
        history.push("/employee");
        navi=true;
      }
      
      
    }
    
   if(navi!=true){
    alert("Invalid Email/Password");
   }
  })
    
   
  }



  return (
    <div>
      <h3>Login Page</h3>
      

      <Card style={{ width: '18rem' }}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      
      
      <Button variant="success" type="submit" onClick={login}>
        Login
      </Button>
      
      <Button variant="danger" type="reset" >
        Reset
      </Button>
      
      
    </Form>
    </Card>
    </div>
  )
}

export default Login
