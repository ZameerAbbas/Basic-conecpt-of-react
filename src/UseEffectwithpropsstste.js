import React,{useState,useEffect} from 'react'

function UseEffectwithpropsstste(props) {
    

useEffect(()=>{
  console.log("useEffect called "+ props.count )
},[props.count])
    return (
        <div>
        <h1>Count Props: {props.count}</h1>
        <h1>Data props: {props.data}</h1>
       <input type="text"></input>
        </div>
    )
}

export default UseEffectwithpropsstste;
