import React, { useState } from 'react'

console.log('counter Component');

const CounterComponentApp = ({counter_value = 0}) => {
    console.log('.:CounterComponentApp:.')

    const [counter, setCounter] = useState(counter_value);

    const ClickCounter = () => {
        setCounter(counter+1)
        console.log("Numbers of click: ", counter);
    }

    return(
        <>
            <h1>Counter Component's react!</h1>
            <h5>Click Counter</h5>
            <hr></hr>
            <h5>Counter: {counter}</h5>
            <button onClick={ClickCounter}>Click here!</button>
        </>
    )
}

export default CounterComponentApp;