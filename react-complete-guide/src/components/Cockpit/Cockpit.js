import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const btnRef = useRef();
  useEffect(() => {
    btnRef.current.click();
    return console.log("useRef working");
  }, []);
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={classes.Button} ref={btnRef} onClick={props.clicked}>
        Switch Button
      </button>
    </div>
  );
};
export default cockpit;
