import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person';
import Example from './components/Example';

function App() {
  const [person, setPerson] = useState([
    {name: "Thanh", age: 5},
    {name: "Trinh", age: 3},
    {name: "John", age: 12},
  ]);
  const changeNameHandler = (e) => {
    setPerson([
      {name: "Thanh", age: 11},
      {name: "Trinh", age: 12},
      {name: "John", age: 313},
    ]);
  };

  const switchNameHandler = (e) => {
    console.log(e);
    setPerson([
      {name: e.target.value, age: 5},
      {name: "Trinh", age: 3},
      {name: "John", age: 12},
    ]);
  };

  return (
    <>
      <div className="App">
        <h1>This is the first ReactJS app</h1>
        {/* <Person></Person> */}
        <button onClick={()=>changeNameHandler()}>Change name</button>
        <Person 
          click={changeNameHandler} 
          changed={switchNameHandler}
          name={person[0].name} 
          age={person[0].age}
          placeholder="Nhap ten 1"
        >
          My hobbies: Teaching
        </Person>
        <Person 
          click={changeNameHandler} 
          changed={switchNameHandler}
          name={person[1].name} 
          age={person[1].age} 
          placeholder="Nhap ten 2"
        />
        <Example ></Example>
      </div>
    </>
    // React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'This is the first ReactJS app'))
  );
}

export default App;
