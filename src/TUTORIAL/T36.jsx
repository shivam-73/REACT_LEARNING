import { useState } from "react";

  
function App() {
  const [users,setUsers] = useState([])
  const [user,setUser] = useState('')
  const handleAddUsers =()=>{
    setUsers([...users,user])
  }

  //Derived State
  const total = users.length
  const last = users[users.length-1]
  const unique = [...new Set(users)].length
  // 
  return (
    <>
      <h1>Derived State</h1>
      <hr />
      <h2>Total User: {total}</h2>
      <h2>last User: {last}</h2>
      <h2>Unique User: {unique}</h2>
      <input onChange={(event)=>setUser(event.target.value)} type="text" placeholder="Add new user"/>
      <button onClick={handleAddUsers}>Add User
      </button>
      {
        users.map((item,index)=>(
          <h4 key ={index}>{item}</h4>
        ))
      }
    </>
  )
}

export default App;
