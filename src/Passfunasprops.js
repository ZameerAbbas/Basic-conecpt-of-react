import React from 'react'

function Pass(props) {
    return (
        <div>
            <h3>pass function as props</h3>
            <button onClick={props.data}>call data function</button>
        </div>
    )
}

export default Pass;
