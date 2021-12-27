import React, { Component } from 'react'

//here we use state and props with componentDidUpdate;
//what are previous state and props?
export class ComponentDidUpdate extends React.Component {
    constructor(){
        super();
        console.log("constructor")
        this.state={
            name:"Zamir"
            //to use previous props and state
            // count:0
        }

    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("componentDidUpdate",prevState.count,this.state.count,snapshot)
        if(this.state.count < 10){
           this.setState({count:this.state.count+1})//count will update untill it reaches to 10
        } 
    }
    //we dont write condition on reander b/c it take us to infinte loop
    //we dont update state in render according to syntax
    render() {
        console.log("render")
        return (
            <div>
                <h1>componentDidUpdate{this.state.count}</h1>
                <button onClick={()=>this.setState({count:+1})}>Update</button> {/*when we update the data only the ComponentDidUpdate and render will call on console not the constructor*/}
            </div>
        )
    }  
}

export default ComponentDidUpdate;
