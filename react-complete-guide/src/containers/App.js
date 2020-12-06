import React, { Component,Fragment } from 'react';
import Styleclasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/Hoc/WithClass';
class App extends Component {
    // state property of a class based component
    state = {
        persons : [
            {id: 1, name: 'Max', age: 23},
            {id: 2, name: 'Manuuu', age: 29},
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
                    <Persons
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangehandler}
                        persons ={this.state.persons}
                    />
            )
        }

    return (
        <Fragment>
            <Cockpit
            title={this.props.appTitle}
            clicked={this.tooglePersonHandler}
            persons={this.state.persons}
            showPerson= {this.state.showPerson}
            />
            {persons}
        </Fragment>
    );
  }
}

export default withClass(App,Styleclasses.App);
