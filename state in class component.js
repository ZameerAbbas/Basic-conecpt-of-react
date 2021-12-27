   import React ,{component} from 'react'

     /*state in class component
    5  */
    class App extends Component{
      constructor(){
        super();
        this.state={
          data:1
        }
      }
      apple(){
        this.setState=({
          data:this.state.data+1})
      }
      render(){
         return (
           <div className="App">
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple}>Update</button>
           </div>
         );
      }

    }