import React, { useState } from 'react'

console.log('counter Component');

const CounterComponentApp = ({counter_value = 0}) => {
    console.log('.:CounterComponentApp:.')

    const [counter, setCounter] = useState(counter_value);

    const AddCounter = () => {
        setCounter(counter+1)
        console.log("Add a click: ", counter);
    }

    const SubtractCounter = () => {
        setCounter(counter-1)
        console.log("Subtrack a click: ", counter);
    }

    const ResetCounter = () => {
        setCounter(counter_value)
        console.log("Reset counter: ");
    }

    return(
        <>
            <h1>Counter Component's react!</h1>
            <h5>Click Counter</h5>
            <hr></hr>
            <h5>Counter: {counter}</h5>
            <button onClick={AddCounter}>Add +1</button>
            <button onClick={SubtractCounter}>Subtract -1</button>
            <button onClick={ResetCounter}>Reset it</button>
        </>
    )
}

export default CounterComponentApp;