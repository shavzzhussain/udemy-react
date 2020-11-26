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
        ],
        showPerson:true
    }
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex,1)
        this.setState({persons: persons})

    }

    nameChangehandler = (event) => {
        this.setState({
            persons : [
                {
                    name: event.target.value,age:23
                },
                {
                    name: event.target.value ,age:29
                },
                {
                    name: event.target.value ,age:23
                }
            ]

        })
    }
    tooglePersonHandler = () => {
         this.setState({
             showPerson : !this.state.showPerson
         })

    }
  render() {
        const style = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '8px',
            font: 'inherit'
        }
        let persons = null

        if (this.state.showPerson){
            persons = (
                <div>
                    {this.state.persons.map((person,index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
                     </div>
            )

        }
    return (
        <div className='App'>
            <h1>This is react app</h1>
            <button style={style} onClick={this.tooglePersonHandler}>Switch Button</button>
            {persons}
        </div>
    );
  }
}

export default App;
