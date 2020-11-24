import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // state property of a class based component
    state = {
        persons : [
            {
                name: 'Max',age:23
            },
            {
                name: 'Manu',age:29
            },
            {
                name: 'Maxcc',age:26
            }
        ]
    }
    switchNameHandler = () =>{
        this.setState({
            persons : [
                {
                    name: 'shavaiz',age:23
                },
                {
                    name: 'Manu',age:29
                },
                {
                    name: 'Maxcc',age:23
                }
            ]
        })
    }
  render() {
    return (
      <div className='App'>
           <h1>This is react app</h1>
          <button onClick={this.switchNameHandler}>Switch Button</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies is racing</Person>
      </div>
    );
  }
}

export default App;
