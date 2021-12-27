import React, { Component } from 'react'



//no Effect of state and props
//firstly constructor will run then render and at last compnentdidmount will run once all of them run. 
//if we click again only render will run 
//if we use state and props then only render will run (check in console) compntdidmnt and constructr will not run
export class ComponrentdidMount extends Component {
    constructor(){
        super();//use to make work (this) key word
        console.log("constructor") 
        this.state={
             name:"Zamir" 
        }
    }
    componentDidMount(){  //sometime we call api here
        console.log("componentDidMount")
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>ComponentDidMount {this.state.name}</h1>
                 <button onClick={()=>this.setState({ name:"Meloo"})} >Update</button>
            </div>
        )
    }
}

export default ComponrentdidMount;
