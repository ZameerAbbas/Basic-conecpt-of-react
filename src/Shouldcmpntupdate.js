import React, { Component } from "react";

//here we use state and props with componentDidUpdate;
//what are previous state and props?
export class Shouldcmpntupdate extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
       console.log("Shouldcmpntupdate",this.state.count)
       /// we use condition to print spicific value according to over need
       if(this.state.count > 5 && this.state.count < 10)
       return true  //true is use to print and false is not print
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>shouldcomponentUpdate{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count+1 })}>Update</button>{" "}
        {/*when we update the data only the ComponentDidUpdate and render will call on console not the constructor*/}
      </div>
    );
  }
}

export default Shouldcmpntupdate;
