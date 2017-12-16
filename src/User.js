import React, { Component } from 'react';
import './App.css';

class User extends Component {
  render() {
    return (
      <h1>Hello:{this.props.username} {this.props.age} {this.props.salary}</h1>
	  
    );
  }
}

export default User;
