import React from 'react'

const ComponentApp = (props) => {

    const Person = {
        name: 'Cristian',
        surname: 'González',
        email: 'cristian.gonzalezp@campusucc.edu.co'
    }    

    console.log("Parameter one", props.parm_1);
    console.log("Parameter two", props.parm_2);
    console.log("Parameter three", props.parm_3);

    return (
        <>
            <h1>Greeting from Funtional Component's react!</h1>
            <h5>Multi-line return by component</h5>
            <hr></hr>
            <p>Parameter one: {props.parm_1}</p>
            <p>Parameter two: {props.parm_2}</p>
            <p>Parameter three: {props.parm_3}</p>
            <hr></hr>
            <p>{JSON.stringify(Person, null, null)}</p>
        </>
    )
}

ComponentApp.defaultProps = {
    parm_3: 'NULL'
}

export default ComponentApp;