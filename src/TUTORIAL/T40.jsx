import { useActionState, useState } from "react";

function App() {
  const handleSubmit = async( previousData,formData)=>{
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res=>setTimeout(res,2000 ))
    // console.log("handleSubmit called" , name,password);
    if(name && password){
      return ({message :'Data Submitted',name,password });
    }else{
      return {error: 'Failed to Submit, Enter proper data',name,password }
    }
    
  }
  const [data,action,pending] = useActionState(handleSubmit,undefined)
  return (
    <>  
      <h1>useActionState Hook in React js</h1>
      <form action={action} method="post">
        <input defaultValue={data?.name} type="text" placeholder="Enter name" name="name" />
        <br /><br />
        <input defaultValue={data?.password} type="password" name="password" placeholder="Enter password"/>
        <br /><br />
        <button disabled={pending }>Submit data</button>
        {
          data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        {
          data ?.message && <span style={{color:'green'}}>{data?.message}</span>
        }

        <h3>Name: {data?.name}</h3>
        <h3>Password: {data?.password}</h3>
      </form>
    </>
  )
}

export default App;
