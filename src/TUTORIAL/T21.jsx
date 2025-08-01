import { useEffect } from "react";

const Counter = ({count,data})=>{

    const handleCounter = ()=>{
        console.log("handleCounter Called");
        
    }

    const handleData=()=>{
        console.log("Handle data called")
    }

    useEffect(()=>{
        handleCounter();
    },[])

    useEffect(()=>{
        handleData() 
    },[data])
    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}
export default Counter


// import { useEffect, useState } from 'react';
// import './App.css' 
// import Counter from './TUTORIAL/T21';


// function App(){
//  const [count,setCount] =useState(0);
//  const [data,setData] = useState(0);
//   return(
//   <div>
//     <Counter count = {count} data ={data}/>
//     <button onClick={()=>{setCount(count+1)}}>Counter {count}</button>
//     <button onClick={()=>{setData(data+1)}}>Data {data}</button>
//   </div>

//   )
// } 

// export default App; 