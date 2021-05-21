import React from 'react'

const ComponentApp = () => {

    const Person = {
        name: 'Cristian',
        surname: 'González',
        email: 'cristian.gonzalezp@campusucc.edu.co'
    }    

    return (
        <>
            <h1>Greeting from Funtional Component's react!</h1>
            <h5>Multi-line return by component</h5>
            <hr></hr>
            <p>Person object: {Person.name} {Person.surname}</p>
            <p>Email: {Person.email}</p>
            <p>{JSON.stringify(Person, null, null)}</p>
        </>
    )
}

export default ComponentApp;