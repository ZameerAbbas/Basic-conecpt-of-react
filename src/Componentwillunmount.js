import React, { Component } from 'react'

export class Componentwillunmount extends Component {
    componentWillMount() {
        /*use to cancel data loading
         use to remove component
         use  to call function(settimeout)
*/        console.log('unmount') 
    }
    render() {
        return (
            <div>
               <h1>ComponentWillUnmount</h1> 
              

            </div>
        )
    }
}

export default Componentwillunmount
