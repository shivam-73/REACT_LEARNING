function User({displayName,name ,getUser}){
    return (
        <div>
            <button onClick={()=>displayName(name)}>Display Name</button>
            <button onClick={()=>getUser ()}>Get User</button>
        </div>
    )
}
export default User;


// import User from "./TUTORIAL/T31";

// function App() {

//     const displayName= (name)=>{
//         alert(name)
//     } 

//     const getUser =()=>{
//       alert("get user function called")
//     }
//   return (
//     <>
//       <h1>Call Parent component function from child component</h1>
//       <User displayName={displayName} name ="anil" getUser ={getUser}/>
//       <User displayName={displayName} name = "sam" getUser ={getUser}/>
//       <User displayName={displayName} name = "adil" getUser ={getUser}/>
//       <User displayName={displayName} name = "pratik" getUser ={getUser} />
//     </>
//   )
// }

// export default App;
