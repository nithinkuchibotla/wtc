import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from "react-bootstrap/Form";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
class LoginForm extends React.Component{
    
  constructor(props){
    
    super(props)
     this.state={
      
     }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(event){
    const target=event.target;
    const value=target.value;
    const name= target.name;

    this.setState({[name]:value});
  }
 
  handleSubmit(event){
    alert('Login Succesfull')
    event.preventDefault()
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>

          <TextField label= "Email" type="email" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <br/>
        <label>
         
          <TextField label="Password" type="password" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <p>
        <Button variant="contained">Submit</Button>
        </p>
        
        <Button>Forgot Password</Button>
        
      </form>

    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
