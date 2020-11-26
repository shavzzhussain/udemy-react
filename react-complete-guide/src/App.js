import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    // state property of a class based component
    state = {
        persons : [
            {id: 1, name: 'Max', age: 23},
            {id: 2, name: 'Manu', age: 29},
            {id: 3, name: 'Maxcc', age: 26}
        ],
        showPerson:true
    }
    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex,1)
        this.setState({persons: persons})

    }

    nameChangehandler = (event,personId) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === personId
        })
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value
        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons:persons})




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
                            changed={(event) => this.nameChangehandler(event,person.id)}
                            name={person.name}
                            age={person.age}
                            key={person.id}/>
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
