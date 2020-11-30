import React,{Component} from 'react';
import './Person.css'

class Person extends Component{
    render() {
        return (

            <div className="Person">
                <p>I am {this.props.name} i am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <button onClick={this.props.click}>Delete</button>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>

        )

    }

}
export default Person;