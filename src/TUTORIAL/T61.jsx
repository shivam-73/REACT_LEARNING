import { useState } from 'react';
import './App.css'
function App() {

  const [name,setName] = useState('');
  const [nameErr,setNameErr] = useState();

  const [pass,setPass] = useState('');
  const [passErr,setPassErr] = useState();

  const handleName=(event)=>{
    if(event.target.value.length > 5){
      setNameErr("Please enter valid username, only 5 characters are allowed ")
    }else{
      setNameErr('')
    }
  }
  const handlePassword=(event)=>{
    let regex = /^[A-Z0-9]+$/i
    if(!regex.test(event.target.value)){
      setPassErr("Please enter valid password, only numbers and alphabets are allowed ")
    }else{
      setPassErr('')
    }
  }
  return (
    <div>
      <input className={nameErr ?'error' :''} type="text" onChange={handleName} placeholder='Enter Name'/>
      <span className='red-color'>{nameErr && nameErr}</span>
      <br /><br />
      <input className={passErr ?'error' :''} type="text" onChange={handlePassword} placeholder='Enter Password' />
      <span className='red-color'>{passErr && passErr}</span>
      <br /><br />
      <button disabled= {nameErr || passErr}>Login</button>
    </div>
  )
}

export default App;

// .error{
//   border: 1px solid red;
// }

// .error:focus{
//   outline: 1px solid red;
// }

// .red-color{
//   color: red;
// }
