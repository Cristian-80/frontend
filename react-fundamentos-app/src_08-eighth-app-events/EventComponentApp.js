import React from 'react'

console.log('Event Component');

const EventComponentApp = () => {
    console.log('.:EventComponentApp:.')

    const ClickEvent = (e) => {console.log(e)}

    return(
        <>
            <h1>Event Component's react!</h1>
            <h5>Catch OnClick Event</h5>
            <hr></hr>
            <button onClick={ClickEvent}>Click here!</button>
        </>
    )
}

export default EventComponentApp;