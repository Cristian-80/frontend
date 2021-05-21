import React from 'react'

const ComponentApp = ({parm_1, parm_2, parm_3}) => {

    const Person = {
        name: 'Cristian',
        surname: 'González',
        email: 'cristian.gonzalezp@campusucc.edu.co'
    }    

    console.log("Parameter one", parm_1);
    console.log("Parameter two", parm_2);
    console.log("Parameter three", parm_3);

    return (
        <>
            <h1>Greeting from Funtional Component's react!</h1>
            <h5>Multi-line return by component</h5>
            <hr></hr>
            <p>Parameter one: {parm_1}</p>
            <p>Parameter two: {parm_2}</p>
            <p>Parameter three: {parm_3}</p>
            <hr></hr>
            <p>{JSON.stringify(Person, null, null)}</p>
        </>
    )
}

export default ComponentApp;