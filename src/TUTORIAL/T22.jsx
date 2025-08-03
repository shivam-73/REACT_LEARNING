import { useEffect } from "react"
const Counter=({count,data})=>{

    useEffect(()=>{
        console.log("Mounting phase only")
    },[])


    useEffect(()=>{
        console.log("Update phase only")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("Unmount Phase");
            
        }
    },[])
    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter;


// import { useEffect, useState } from 'react';
// import './App.css' 
// import Counter from './TUTORIAL/T22';


// function App(){
//   const [count,setCount] = useState(0);
//   const [data,setData] = useState(0);

//   const [display , setDisplay]  = useState(true)
//   return(
//   <div>
//     {
//       display ?<Counter count ={count} data ={data}/> :null
//     }
//     <button onClick={()=>setCount(count+1)}>Count {count}</button>
//     <button onClick={()=>{setData(data+1)}}>Data {data}</button>
//     <button onClick={()=>{setDisplay(!display)}}>Toggle</button>
//   </div>

//   )
// } 

// export default App; 
