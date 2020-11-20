import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className='App'>
           <h1>This is react app</h1>
            <Person name="shavaiz" age="123"/>
            <Person name="bunto" age="22">My Hobbies is racing</Person>
            <Person name="bunto" age="22">My Hobbies is racing</Person>
            <Person name="test" age="23"/>
            <Person name="text2" age="32"/>
      </div>
    );
  }
}

export default App;
