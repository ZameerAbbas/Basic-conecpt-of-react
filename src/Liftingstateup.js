import React from 'react'

function Liftingstateup(props) {
    // data is to send to parent cmpnt using on click
    const data='zamir'
    return (
        <div>
            <h2>user Name : {props.name}</h2>
            <button onClick={()=>props.alert(data)}>Click Me</button>
        </div>
    )
}

export default Liftingstateup;
