import React,{Component,Fragment} from 'react';
import classes from './Person.css'
import withClass from '../../Hoc/withClass'

class Person extends Component{
    render() {
        return (
                <Fragment>
                     <p>I am {this.props.name} i am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <button onClick={this.props.click}>Delete</button>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
                </Fragment>
               

        )

    }

}
export default withClass(Person,classes.Person);