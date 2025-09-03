import { useActionState, useState } from 'react';
import './App.css'
function App() {
 const handleLogin = (prevData,formData)=>{
  let name = formData.get('name')
  let password = formData.get('password')
  let regex = /^[A-Z0-9]+$/i;

  if(!name || name.length > 5){
    return {error : 'Name can not be empty or Name should not contain more than 5 characters',name,password}
  }else if(!regex.test(password)){
    return {error : 'Password can contain only numbers and alphabets',name,password}
  }else{
    return {message : 'Login Done',name,password}
  }
  
 } 
  const [data,action,pending] =useActionState(handleLogin)
  
  return (
    <div>
      <h1>Validation with useActionState in React</h1>
      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      <form action={action}>
        <input type="text" defaultValue={data?.name} name = 'name' placeholder='Enter username' />
        <br /><br />
        <input type="text" defaultValue={data?.password} name='password' placeholder='Enter Password' />
        <br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default App;
