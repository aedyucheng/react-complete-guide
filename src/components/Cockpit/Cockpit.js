import React, { useRef, useEffect, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);


  useEffect(
    () => {
      toggleButtonRef.current.click();
    }
    , []);


  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I am a react app</h1>
      <p className={assignedClasses.join(' ')}>Welcome to react world.</p>
      <button ref={toggleButtonRef} className={btnClass} onClick={props.click}>Toggle Persons</button>


      {/* <AuthContext.Consumer>
        {
          context =>  <button onClick={context.login}>log in</button>
        }
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>log in</button>
      
     
    </div>
  );


}

export default cockpit;