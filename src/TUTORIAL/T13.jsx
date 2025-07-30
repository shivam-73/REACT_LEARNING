import { useState } from 'react'
function App(){
const [name,setName] = useState("shiv");
const [password,setPassword] = useState();
const [email,setEmail] = useState()
  return(
    <div>
      <h1>Controller Component</h1>

      <form action="" method="get">

        <input type="text" value = {name} onChange={()=>{setName(event.target.value)}} placeholder='Enter name' />
        <br />
        <input type="password" value ={password} onChange={()=>{setPassword(event.target.value)}} placeholder='Enter password' />
        <br />
        <input type="text" value = {email  } onChange={()=>{setEmail(event.target.value)}}  placeholder='Enter email' />
        <br />
        <button>Submit</button>

        <button onClick={()=>{setName('') ;setEmail('');setPassword('') }}>Clear</button>

        <br />
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  )
} 

export default App; 
