import React, { Component,createRef } from 'react'

export class Ref extends Component {
    // here we use ref with the help of constructorr
    constructor(){
        super();
        this.inputRef=createRef();

    }
    componentDidMount(){  
        /*  the value will display in inputbox
         when html is ready then compnentdidount will run*/
        // console.log(this.inputRef.current.value="1000")

    }
    getVal(){
        /*the whole Dom of input will be display in console the happen b/c of createRef which forces the dom to acsess.
        We can use refs to access DOM elements and React components. */
        // console.log(this.inputRef)  // use to access Doms

        console.log(this.inputRef.current.value) ///to get the data input in input tag in console. 
       
       //to make styling // use to manuplate Dom
       this.inputRef.current.style.color="red";
       this.inputRef.current.style.backgroundColor="blue ";

    }
 
    render() {
        return (
            <div>
                <h1>Ref Component</h1>
                <input type="text" ref={ this.inputRef} />
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        )
    }
}

export default Ref
 