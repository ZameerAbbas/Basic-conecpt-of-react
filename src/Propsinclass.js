
import React from 'react';
 

export default  class Propsinclass extends React.Component{
render()
    {
        console.log(this.props)
        return(
            <div style={{backgroundColor:'crimson',color:'#fff'}} > 
            <h1> {this.props.name} is Student </h1>
            {/* <h1> {this.props.other.phone} is phone </h1> */}
            </div>
            )
    }

}

