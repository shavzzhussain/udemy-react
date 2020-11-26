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
        let style = {
            backgroundColor: 'red',
            border: '1px solid black',
            color: 'white',
            padding: '8px',
            font: 'inherit',
            ':hover': {
                backgroundColor : 'black'
            }
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
            style.backgroundColor = 'green'
        }
      const classes = []
      if (this.state.persons.length <=2) {
          classes.push('red')
      }
      if (this.state.persons.length <=1) {
          classes.push('bold')
      }

    return (
        <div className='App'>
            <h1>This is react app</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button style={style} onClick={this.tooglePersonHandler}>Switch Button</button>
            {persons}
        </div>
    );
  }
}

export default App;
