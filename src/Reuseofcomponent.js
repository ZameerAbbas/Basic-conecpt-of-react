import React from 'react'

function Reuseofcomponent(Prop) {
    return (
        <div>
            <span>{Prop.data.name}</span>
            <span>{Prop.data.city}</span>
            <span> {Prop.data.countury}</span>
           
        </div>
    ) 
}

export default Reuseofcomponent;
