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
    switchNameHandler = (newName) =>{
        this.setState({
            persons : [
                {
                    name: newName,age:23
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

    nameChangehandler = (event) => {
        this.setState({
            persons : [
                {
                    name: 'Max',age:23
                },
                {
                    name: event.target.value ,age:29
                },
                {
                    name: 'Maxcc',age:23
                }
            ]

        })
    }
  render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '8px',
            font: 'inherit'
        }
    return (
        <div className='App'>
            <h1>This is react app</h1>
            <button style={style} onClick={() => this.switchNameHandler('new Name')}>Switch Button</button>
            <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this,'ssssss')}/>
            <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                changed={this.nameChangehandler}/>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies is racing</Person>
        </div>
    );
  }
}

export default App;
