import React from 'react';
import './Person.css';
const person = (props) => {
return (
    <div className="Person">
    <p>I am {props.name} i am {props.age} years old.</p>
        <p>{props.children}</p>
        <button onClick={props.click}>Delete</button>
    </div>
)
}
export default person;