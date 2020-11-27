import React, { Component } from 'react';
import Styleclasses from './App.css';
import Person from '../components/Persons/Person/Person.jsx'
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
      const classes = []
      if (this.state.persons.length <=2) {
          classes.push('red')
      }
      if (this.state.persons.length <=1) {
          classes.push('bold')
      }

    return (
        <div className={Styleclasses.App}>
            <h1>This is react app</h1>
            <p>This is really working</p>
            <button className={Styleclasses.Button} onClick={this.tooglePersonHandler}>Switch Button</button>
            {persons}
        </div>
    );
  }
}

export default App;
