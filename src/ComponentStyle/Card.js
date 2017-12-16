import styled from 'styled-components';
import React, { Component } from 'react';
import personImg from '../Image/img_avatar.png'

const CardS = styled.div`
  position: relative;
  margin-bottom:30px; 
`
class Card extends Component { 
  constructor(props) {
    super(props);
    this.state = {
                  value: '',
                  active:true
                 };
    this.handleChange = this.handleChange.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render(){
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
    return(
      <div className='col-md-3 relative-wrap'>
        <div className={this.state.active ? 'CardWrap' : 'CardWrap-active'}>
          <img src={personImg} alt="Avatar" style={{width: '100%'}}/>
          <div className="container" style={{padding:'2px 16px',position:'relative',boxSizing:'border-box'}}>
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p>
            <p>JohnD@gmail.com</p>
            <p>+662223334442</p>
            <p>EncoB4</p>
            <p>20/11 payathai 10100</p>
            {/* ={this.state.active ? 'hideItem': 'showItem'} */}
          </div>
          <div className='button-circle' onClick={this.toggleClass} style={circleStyle}>
              {this.state.active ?  String.fromCharCode(8659):String.fromCharCode(8657)}
          </div> 
        </div>
    </div>
    );
  }
}


export default Card;