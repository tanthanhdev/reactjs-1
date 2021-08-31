import React, { Component } from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div className='Person'>
      <p onClick={props.click} >This is a {props.name}. I'm {props.age} years old.</p> 
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} placeholder={props.placeholder} ></input>
    </div>
  )
}

// // Type old React
// class Person extends React.Component {
//   render() { 
//     return (
//       <p>This is a {this.props.name}. I'm {this.props.age} years old.</p> 
//     )
//   }
// }

export default Person;