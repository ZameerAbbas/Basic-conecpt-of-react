function Student(prop){
 console.log(prop);
    return (
        <div style={{backgroundColor:"skyblue"}}>
            <h1>Hello {prop.name}</h1>
            {/* <h2>Email: {prop.email}</h2>
            <h2>Phone: {prop.other.phone}</h2>
            <h2>Adress: {prop.other.adress}</h2> */}
        </div>
    )
     
}
export default Student;