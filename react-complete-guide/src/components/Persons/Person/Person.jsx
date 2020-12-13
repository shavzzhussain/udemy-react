import React, { Component, Fragment } from "react";
import classes from "./Person.css";
import withClass from "../../Hoc/WithClass";
import PropsType from "prop-types";
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputEleRef = React.createRef();
  }
  componentDidMount() {
    this.inputEleRef.current.focus();
  }

  render() {
    return (
      <Fragment>
        <p>
          I am {this.props.name} i am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <button onClick={this.props.click}>Delete</button>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          ref={this.inputEleRef}
        />
      </Fragment>
    );
  }
}

Person.PropsType = {
  click: PropsType.func,
  name: PropsType.string,
  age: PropsType.number,
};
export default withClass(Person, classes.Person);
