import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  render() {
    console.log("[Persons.js] rendering...")
    return this.props.persons.map((person, index) => {
      return <Person
        key={person.id}
        name={person.name}
        age={person.age}
        change={(event) => { this.props.change(event, person.id) }}
        click={(event) => this.props.click(event, person.id)} 
        />
    });
  }
}

export default Persons;
