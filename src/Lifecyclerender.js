import React from 'react'

class Lifecyclerender extends React.Component {
    constructor(){
        super();
        this.state={
            email:"sajgx.com"
        }
    }
render(){
    console.warn("Render method",this.state.email)   //to check we use (this.props) that the value is update or not
    return (
        <div>
      <h1>lifecycle child component {this.state.email}</h1> 
      <button onClick={()=> this.setState({email:"zamir.com"})}>Update Name</button>    
        </div>
    )
}
}

export default Lifecyclerender;
