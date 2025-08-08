import { useState, useTransition } from "react";

function App() {
  const [pending ,startTransition] = useTransition()
  const handleButton =()=>{
    startTransition(async()=>{
      await new Promise((res)=>
        setTimeout(res,3000))   
  })
  }
  return (
    <>
      <h1>useTransition Hook in React js</h1>
      {
        pending ? 
        <img style={{width:'100px'}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />
        :null
      }
      <button disabled = {pending} onClick={handleButton}>Click</button>
    </>
  )
}

export default App;
