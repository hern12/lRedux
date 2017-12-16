import React, { Component } from 'react';
import User from "./User.js";
import personImg from './Image/img_avatar.png'
import {connect} from "react-redux";
import './App.css';
import Button from './Button';
import Card from './ComponentStyle/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    
    const circleStyle = {
      backgroundColor: '#4CAF50',
      border: 'none',
      color: 'white',
      padding: '6px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      position:'absolute',
      textAlign: 'center',
      bottom:'-25px',
      left:'190px',
      marginLeft:'-20px',
      textAlign:'center',
      cursor:'pointer',
      borderRadius: '50%',
      zIndex:9999,
      width:'40px',
      height:'40px'
    }

    return (
      <div className='row'>
        <Card>
        </Card>
        <Card>
        </Card>
        <Card>
        </Card>
        {/* <User username={this.props.user.name} age={this.props.user.age} salary={this.props.emp.result}/>
        <input type='text' value={this.state.value} onChange={this.handleChange}/>
        <Button onClick={()=>this.props.setName(this.state.value)} primary  > ChangeName </Button>
        <button onClick={()=>this.props.addSalary(10000)}> Add Salary </button>
        <button onClick={()=>this.props.minusSalary(5000)}>Minus Salary</button> */}
      </div>
      
    );
  }
}
const mapStateToProps=(state)=>{
  return {
    user:state.user,
    emp:state.emp
  }
}
const mapDispatchtoProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload:name
      })
    },
    addSalary:(amount)=>{
      dispatch({
        type:"ADD",
        payload:amount
      })
    },
    minusSalary:(amount)=>{
      dispatch({
        type:"SUBTRACT",
        payload:amount
      })
    }
  };
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
