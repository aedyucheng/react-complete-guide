import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = () => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name:"Ed", age:28},
      {name:"John", age:27},
      {name:"Mary", age:26}
    ]
  })

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name:"Ed Chen", age:28},
        {name:"John", age:27},
        {name:"Mary", age:25}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}>I am happy !!!</Person>
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}/>
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age}/>
    </div>
  );
}

export default app;
