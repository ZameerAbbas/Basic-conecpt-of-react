import React, { PureComponent } from 'react'

export class Purecompnent extends PureComponent {
    //in pure component if we use setstate the it will update the reander multiple time if we click the button
    //but if we use only state in onclick button it we only render one time in console 

    constructor(){
        super();
        this.state={
            count:1
        }
    }


    render() {
        console.log("check rendering")
        return (
            <div>
                <strong>pure component : {this.state.count}</strong>
                <button className="btn btn-primary"  onClick={()=>this.setState({count:this.state.count+1})} >uplpoad count</button>
            </div>
        )
    }
}

export default Purecompnent;
