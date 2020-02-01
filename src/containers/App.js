import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context';

class App extends Component {

  state = {
    persons: [
      { id: "aa", name: "Ed", age: 28 },
      { id: "bb", name: "John", age: 27 },
      { id: "cc", name: "Mary", age: 26 }
    ],
    showPersons: false,
    authenticated: false
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        change={this.changeNameHandler}
        click={this.deletePersonHandler} />
    }

    return (
      <div className={classes.App}>

        <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            click={this.togglePersonsHandler}
          />
        
        {persons}

        </AuthContext.Provider>
      </div>

    );
  }

}

export default App;
