import React from 'react';
import styled from "styled-components";

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    @media: (min-width:500px):{
            width: '450px'
        }
    }
`;
const person = (props) => {
return (
    <StyleDiv>
    <div className="Person">
    <p>I am {props.name} i am {props.age} years old.</p>
        <p>{props.children}</p>
        <button onClick={props.click}>Delete</button>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    </StyleDiv>
)
}
export default person;