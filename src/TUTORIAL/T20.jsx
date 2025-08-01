import { useEffect, useState } from 'react';
import './App.css' 


function App(){
  const [counter,setCounter] = useState(0);
  const [data,setData] = useState(0);
  useEffect(()=>{
  // callOnce()
    counterFunction()
  },[counter])

  function counterFunction(){
    console.log(`Counter function ${counter}`);
    
  }
  function callOnce(){
    console.log("callOnce function called")
  }

  return(
  <div>
    <h1>UseEffec t Hooks</h1>
    <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
    <button onClick={()=>{setData(data+1)}}>Data {data}</button>
  </div>

  )
} 

export default App; 
