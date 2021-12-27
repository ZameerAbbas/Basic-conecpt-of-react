import React, { useEffect, useState, Fragment, useMemo, useRef } from "react";
import "./App.css";
import { Button, Alert, Table } from "react-bootstrap";
import Propsinclass from "./Propsinclass";
// import User from './Functioncmpnt';
// import Classcmpnt from './Classcmpnt';
import Student from "./Student";
import Conditional from "./Conditionalrendering";
import Pass from "./Passfunasprops";
import Member from "./Members";
import Lifecyclerender from "./Lifecyclerender";
import ComponrentdidMount from "./ComponrentdidMount";
import ComponentDidUpdate from "./ComponentDidUpdate";
import Shouldcmpntupdate from "./Shouldcmpntupdate";
import Componentwillunmount from "./Componentwillunmount";
import UseEffectwithpropsstste from "./UseEffectwithpropsstste";
import Reuseofcomponent from "./Reuseofcomponent";
import Cols from "./Cols";
import Liftingstateup from "./Liftingstateup";
import Purecompnent from "./Purecompnent";
import Ref from "./Ref";
import ForwordRef from "./ForwordRef";
import { Link, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";

/*to update data of Propsinclass component we use CLASS function*/

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name: "Zamir"
//     }
//   }
//     render() {
//       return(
//         <div className="App">

//           {/*we can only change props from parent component which is App component . creating new class  component in App component to update name */}
//       <Propsinclass name={this.state.name}/>
//       {/*changing value of props by click button*/}
//       <button onClick={()=>this.setState({name:"Meloo"})}>Update</button>
//         </div>
//       )
//     }
// }

//lifecycle using class

// class App extends React.Component{
//   constructor(){
//    super();
//    this.state={
//      data:"zamir"
//    }

//   }
//   render() {
//     return(
//       <h1>Hello{this.state.data}</h1>
//     )
//   }
// }

{
  /*the component is made spreadly  it is lifecyle method third*/
}
// export class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       show:true
//     }
//   }
//   render() {// ! is use to make true to false or false to true(reversing)
//     return (
//       <div>
//        {
//         this.state.show ? <Componentwillunmount />:<h1>child component removed</h1>
//        }
//        <button onClick={()=>this.setState({show:!this.state.show})}>umount </button>

//       </div>
//     )
//   }
// }

// export default App

function App() {
  //1 function Apple(){
  //   return(
  //     <h4>Apple component</h4>
  //   )
  // }

  //2// let name ="Hello React";
  // function apple(){
  //   {
  //     alert(name)
  //   }
  // }

  /*3 it will not update data in h1 b/c in react when we use state and
   props to update the data of any component
   here the data will be freez 
   */
  //  let data="meloo";
  //   function updateData(){
  //     data="zamir";
  //     alert(data)
  //   }

  /*state in function component
        state is actually data container
    4 we usestate or props instancely to update the data*/
  // const [data, setDate] = useState(1)  {/*this is destructuring method*/}
  // function updateData(){

  //   setDate(data+2)
  // }
  // console.warn("____-----____");

  /*5 prop with function compnent and use of usesdate with props*/
  // const [name,setName]=useState("Zamir")

  /*6 get input box value
  how to get and use api in input box */

  //to print a value using destructring
  // const[data ,setData]=useState(null)
  // const[print ,setprint]=useState(false)

  // function getData(val){
  //   console.log()
  //   setData(val.target.value)
  // }

  /*7 hide and show elements*/
  // let[status,setstatus]=React.useState(true) //using distructuring array

  /*8 Basic From*/
  //  const[name,setName] =useState("")
  //  const[Tnc,setTnc] =useState(false)
  //  const[interest,setInterest] =useState("")
  //   function getFormData(e){ //e means event
  //     console.log(name,Tnc,interest)
  //    e.preventDefault()  //type of function using to stop a from form submittion
  //   }

  //9 component is made sapreatedlyc conditionalrendering

  //10 component is made sapreatedly passfunasprops
  //  function getData(){
  //    alert("hello from app")
  //  }

  //Hooks
  //12 useState
  //  const [data, setData] = useState("zamir")

  //13 useEffect
  //   const[count,setCount]=useState(0)

  //   useEffect(()=>{
  // console.log("useEffect")
  //   })

  //14 +UseEffectwithpropsstste  useEffect with specific props and state

  // const[data,setData]=useState(10)
  // const[count,setCount]=useState(0)
  // useEffect(()=>{
  //   console.log("useEffect called for Data")
  // },[data])//we use param for calling a spacific data or entery
  // useEffect(()=>{
  //   console.log("useEffect called for Count" )
  // },[count])  //we use param for calling a spacific data or entery

  {
    /*15 handle array with list */
  }

  // const student=['zamir','sharafat','najam','asif gul','sajid']
  {
    /* method to print arrays(student)  */
  }

  //map looping
  // student.map((i)=>{
  // console.log("map ",i)
  // });

  //for loop
  // for(let i=0;i<student.length;i++){
  //   console.log("this is for loop ",student[i])
  // }
  // const Data =[
  // {name:"zamir",email:"zamir@gmail.com",contact:888},
  // {name:"Sajid",email:"Sajid@gmail.com",contact:444},
  // {name:"Junaid",email:"Junaid@gmail.com",contact:888},
  // {name:"Xilam",email:"Xilan@gmail.com",contact:444},
  // {name:"HAsnian",email:"hasnain@gmail.com",contact:888}
  // ]

  //16  nested list with nested array  using list
  // const Data = [
  //   {
  //     name: "zamir",
  //     email: "zamir@gmail.com",
  //     adress: [
  //     { Hn: "10", city: "gilgit", country: "pakistan" },
  //     { Hn: "10", city: "gilgit", country: "pakistan" },
  //     { Hn: "10", city: "gilgit", country: "pakistan" },
  //     { Hn: "10", city: "gilgit", country: "pakistan" }]
  //   },
  //   {
  //     name: "Sajid",
  //     email: "Sajid@gmail.com",
  //     adress: [
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //     ],
  //   },
  //   {
  //     name: "Junaid",
  //     email: "Junaid@gmail.com",
  //     adress: [
  //       { Hn: "10", city: "hunza", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //     ],
  //   },
  //   {
  //     name: "Xilam",
  //     email: "Xilan@gmail.com",
  //     adress: [
  //       { Hn: "10", city: "danyore", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //     ],
  //   },
  //   {
  //     name: "HAsnian",
  //     email: "hasnain@gmail.com",
  //     adress: [
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" },
  //       { Hn: "10", city: "gilgit", country: "pakistan" }]
  //   },
  // ];

  // 17 reusing component
  // const Users = [
  //   { name: "zamir", city: "Gilgit", countary: "pakistan" },
  //   { name: "Junaid", city: "Murtazabad", countary: "pakistan" },
  //   { name: "xilan", city: "Danyore", countary: "papkitsam" },
  //   { name: "Hasnain", city: "Gilgit", countary: "india" },
  // ];

  {
    /*18 send Data Child to parent cmpnt */
  }
  {
    /* lifting state up , sending data from parent to child  */
  }
  // let data ="Zamir"

  {
    /* lifting state up , sending data from child to aprent using function  */
  }
  // function parentAlert(data){
  //   document.write(data)
  // }

  {
    /* 20 useMemo Hook in react js */
  }
  // const [count, setCount] = useState(0);
  // const [items, setItems] = useState(10);

  /*when we click  updatecount button , below  function is updating but on updateitems button the
    function is not updating on screen but in console the function is calling
    to stop that(if below function is calling again and agian it ma cause problem to avoid this  )  we use useMemo */
  /*in functional component if we want to use pure component we can use that with the help of useMemo */
  //  function mulitCount(){
  //     return count*5
  //  }

  // use of useMEmo with callback function
  //we set some condtion to print accoring to over need in [] ofconst mulitCountMemo

  // const mulitCountMemo = useMemo(
  //   function mulitCount() {
  //     console.log("multi count");
  //     return count * 5;
  //   },
  //   [count]
  // );

  /* 21 useRef  in react*/
  // let inputRef=useRef(null)
  // function HandleInput(){
  //   console.log("functon call")
  // inputRef.current.value="100"
  // inputRef.current.focus()
  //     inputRef.current.style.color="red"

  // }
  {
    /* 22 ForwordRef is made as child component */
  }

  // let inputRef = useRef(null); ///initial the value is null
  // function UpdateInput() {
  //   inputRef.current.value = "100";
  //   inputRef.current.style.color = "red";
  //   inputRef.current.style.backgroundColor = "blue";
  // }  // after onClick function it call a callback function name as UpdateInput that updates the values of inputref

  {
    /* 23 Controlled component */
  }
  // let [val,setVal]=useState(" ");
  // let [item,setItem]=useState(" ")

  {
    /* 24 unControlled component */
  }
  //uncontrolled means  it is not controlled by state it maens that it is directly munipulate from Dom
  //   let inputRef=useRef(null);
  //  let inputRef2=useRef(null);
  // function submitForm(e){
  //    e.preventDefault()
  //    console.log("input field 1 value :",  inputRef.current.value )
  //    console.log("input field 2 value :",  inputRef2.current.value )
  //    let input3=document.getElementById("input3").value
  //    console.log("input3",input3)
  // }

  return (
    <div className="App">
      {/* <User />
     <Classcmpnt /> 
     1  <Apple /> */}

      {/*we can only change props from parent component which is App component . creating new class  component in App component to update name (see the top ) */}
      {/* <Propsinclass name="Zamir" other={{phone:"0192887"}} /> */}
      {/*changing value of props by click button*/}

      {/*2 
     <h1>{name}</h1> */}
      {/* <button onClick={apple} >Click Me</button> */}

      {/* 3
     <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button> */}

      {/* 4 
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button> */}

      {/*5 usestate with props*/}
      {/* <Student name={name}/>
     <button onClick={()=>{setName("Meloo")}}>Update Name</button> */}
      {/* <Student name={"Abbas"} email={"Abbas@gmail.com"} other={{phone:"031497980588",adress:"Rahimabad"}}/>
     <Student name={"Meloo"} email={"Meloo@gmail.com"} other={{phone:"031497980588",adress:"Rahimabad"}}/> */}

      {/*6 get input box value*/}
      {/*to print a data use data from distructure in h1 tag*/}
      {/* {
       print?
       <h4>{data}</h4> 
       :null
     }
   <input type="text"  onChange={getData}/>
    <button onClick={()=> setprint(true)}>print</button> */}

      {/*7  hide and show Elemnet*/}
      {/* {
        status?  <h1>Hello world</h1>:false
      } */}

      {/*show and hide with double buttons*/}
      {/* <button onClick={()=>setstatus(false)}>Hide</button>
    <button onClick={()=>setstatus(true)}>Show</button> */}

      {/*show and hide with single button*/}
      {/* <button onClick={()=>setstatus(!status)}>toggle</button> */}

      {/*8 Basic From */}
      {/* <h1>Handle From in React</h1>
    <form onSubmit={getFormData}>
      <input type="text" placeholder="enter name" value={name}  onChange={(e)=>setName(e.target.value)} /> <br /> <br />herde we use value to make work clear button */}
      {/* <select onChange={(e)=>setInterest(e.target.value)}>      
        <option>Select Option</option>
        <option>Marval</option>
        <option>DC</option> 
      </select> <br /> <br /> 
      <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}  /> <span>Accept tream and conditions</span><br /> <br />
      <button type="submit">Submit</button>
      <button>clear</button>
    </form> */}

      {/*9Conditional reandering || if condition  */}
      {/* < Conditional /> */}

      {/*10 pass function as props*/}
      {/* <Pass data={getData} /> */}

      {/*11 Members*/}
      {/*<div style={{float:'right'}}>
    <Member  data={getData}/>
    </div> */}

      {/*lifecycle has 3 methods mounting updating unmounting*/}

      {/*the component is made spreadly*/}
      {/* <Lifecyclerender /> */}

      {/*the component is made spreadly  it is lifecyle method first(mounting)*/}
      {/* <ComponrentdidMount />  */}

      {/*the component is made spreadly  it is the lifecyle method second(updating)
   here firstly shouldcomponent will run after that the ComponentDidUpdate will run */}
      {/* <ComponentDidUpdate /> */}

      {/*the component is made spreadly  it is lifecyle method second (updating) shouldcpmtupdate*/}
      {/* <Shouldcmpntupdate /> */}

      {/* Hooks */}
      {/*12 useState */}
      {/* <h2>{data}! Meloo</h2>
   <button onClick={()=>setData("Meloo")}>update</button>  */}

      {/* 13 useEffect */}
      {/* <h1>useEffect{count}</h1>
       <button onClick={()=>setCount(count+1)}>update</button> */}

      {/* 14 useEffecect with props and state*/}
      {/* <h1>Count: {count}</h1>
      <h1>Data: {data}</h1> 
       <button onClick={()=>setCount(count+1)}>update Count</button>
      <button onClick={()=>setData(data+1)}>update Data</button> */}

      {/* 14 UseEffectwithpropsstste */}

      {/* <UseEffectwithpropsstste count={count} data={data} />
       <Button className="success" onClick={()=>setCount(count+1)}>update Count</Button>     
       <Button className="success" onClick={()=>setData(data+1)}>update Count</Button> */}
      {/*Bootstrap*/}

      {/*      
      <Alert  variant="success">
      This is a'success'alert—check it out!
       </Alert> */}

      {/*15 handle array with list */}
      {/* <h1>handle array with list </h1> */}
      {/* best  method to print arrays  is use of map function */}
      {/* {
      student.map((data)=>
      <h1>Name is : {data}</h1>
      )
    }
     */}

      {/* <Table striped border="1" hover>
      <tbody>
    <tr>
           <td>Name</td>
           <td>Email</td>
           <td>Contact</td>
         </tr>
       {
         Data.map((data,i)=>
        //  <tr key={i}>
        //    <td>{data.name}</td>
        //    <td>{data.email}</td>
        //    <td>{data.contact}</td>
        //  </tr>
         
        ///to print a specific value in table using map method
        data.contact === 888 ?
        <tr key={i}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.contact}</td>
      </tr>:null
         )
       }
       </tbody> 
    </Table> */}

      {/* 16 nested list with nested array  using list */}

      {/* <Table bordered hover variant="dark"  responsive>
        <tbody>
          <tr>
            <td>#N0</td>
          <td>Name</td>
          <td>Email</td>
          <td>Adress</td>
          </tr>
        </tbody>
        {
          Data.map((items,i)=>
          
          <tr key={1}>
            
            <td>{i+1}</td>
          <td>{items.name}</td>
          <td>{items.email}</td>
          <td>{items.adress.map((i)=>
          <Table style={{color:"white"}  }striped bordered hover variant="dark"  responsive>
             <tr>
             <td>{i.Hn}</td>
             <td>{i.city}</td>
             <td>{i.country}</td>
             </tr>
             </Table>
          )
          }</td>
          </tr>)
        }
      </Table> */}

      {/* 17 reusing component */}

      {/* <h1>Reuse of compnent</h1> */}
      {/* without loop */}
      {/* <Reuseofcomponent  /> */}

      {/* reuse of component wit map function  */}
      {/* {Users.map((item,i) => (
        <Reuseofcomponent data={item} />
      ))} */}

      {/*18 Fragments are use to wrappes maltiple component or elements  */}

      {/* method1 */}
      {/* <React.Fragment>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
      </React.Fragment> */}

      {/* method 2 */}
      {/* <Fragment>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
      </Fragment> */}

      {/* method 3 */}
      {/* <>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
        <h1>fregment h1 </h1>
      </> */}

      {/* what happen when we can't use fragment */}
      {/* for table data component is made sepretedly named as Cols.js check that */}
      {/* <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table> */}

      {/*18 send Data Child to parent cmpnt */}
      {/* lifting state up , sending data from parent to child  */}

      {/* <Liftingstateup name={data}/> */}

      {/* lifting state up , sending data from child to aprent using function  */}
      {/* <Liftingstateup alert={parentAlert} /> */}

      {/* 19 Pure component only uses in class component */}
      {/* <h1>pure component</h1> */}
      {/* 
        <Purecompnent />
         */}

      {/* 20 useMemo Hook in react js */}
      {/* use to stop unwanted updates of another hooks like usestate and useeffect */}
      {/* <h1>useMemo Hook in react </h1>
      <h1>Count : {count}</h1>
      <h1>items : {items}</h1> */}
      {/* function without use of useMEmo */}
      {/* <h2> {mulitCount()}</h2> */}

      {/* function with useMemo */}
      {/* <h2>{mulitCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>update Count</button>
      <button onClick={() => setItems(items * 10)}>update Count</button> */}

      {/* Ref in react.js */}
      {/* we can't use ref directly in functional compnt for that we have to use a hook  
       with the help of ref we can manipulate the Dom .ref is usually use in emergency .ref well directly manipulate the DOm*/}
      {/* <h1><Ref /></h1> */}

      {/*21 useRef in reactjs */}
      {/* it is hook in react which is usually used in functional component  */}
      {/* <h1>useRef in react</h1>
        <input type="text" ref={inputRef} />
        <button onClick={HandleInput }>Handle input</button> */}

      {/* 22 ForwordRef is made as child component */}
      {/* <h1>ForwardRef in react </h1>
      <ForwordRef ref={inputRef} />
      <button onClick={UpdateInput}>Update Input</button> */}

      {/* 23 Controlled component */}
      {/* <h1>Controlled component</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} /> 
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />  */}
      {/* to print */}
      {/* <h3>{val}</h3>
        <h3>{item}</h3> */}

      {/* 24 Uncontrolled Component */}
      {/* <h1>uncontrolled component </h1> 
        <form onSubmit={submitForm}>
       
        <input type="text" ref={inputRef} /> <br></br> <br></br>
        <input type="text" ref={inputRef2} /> <br></br> <br></br>
        <input type="text" id="input3" /> <br></br> <br></br>
        <button>Submit</button>
        </form> */}

      {/* 25 Higher Order Function    || component is made down below */}
      {/* <h1>HOC</h1>
        <HOCRed cmp={Counter} /> 
        <HOCGreen cmp={Counter} />  */}

      {/* 26 Routing setup not recommended method*/}
      {/* <Router>
          <Link to="home">home</Link>
          <Link to="about">about</Link>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><About /></Route>
       </Router> */}

      {/* 27 Routing setup(routers)  with recommended method */}
      {/* Router is  in index.js and used as wrapper to app component  see the file  */}
      {/* <Nav />
        <Route path="/about"><About /></Route> 
        <Route path="/" exact={true}><Home /></Route> */}
    </div>
  );
}

{
  /* 26 /
}

// function Home(){
//   return(
//     <>
//   <h1>Home page</h1>
//   <p>this is home page</p>
//   </>
//   )

// }

// function About(){
//   return(
//     <>
//   <h1>About page</h1>
//   <p>this is about page</p>
//   </>
//   )

// }

{
  /* 25 Higher Order component as a wrapper */
}
//  function HOCRed(props){

//    return <h2 style={{backgroundColor:'red',width:"100px"}}>red<props.cmp /></h2>
//  }
//   function HOCGreen(props){

//    return <h2 style={{backgroundColor:'green',width:"100px"}}>Green<props.cmp /></h2>
//  }

{
  /* 25 Higher Order component */
}
//  function Counter(){
//    const [count,setCount]=useState(0)
//    return <div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>update</button>

//  </div>

export default App;
