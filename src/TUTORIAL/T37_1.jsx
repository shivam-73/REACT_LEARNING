function AddUser({setUser}){
    return(
        <div>
            <h1>Add User</h1>
            <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="Enter user name"/>
            <hr />
        </div>
    )
}
export default AddUser


// import AddUser from "./TUTORIAL/T37_1";
// import DisplayUser from "./TUTORIAL/T37_2";
// import { useState } from "react"

// function App() {
// const [user,setUser] = useState('')
//   return (
//     <>
//       <AddUser setUser = {setUser}/>
//       <DisplayUser user = {user}/>
//     </>
//   )
// }

// export default App;
