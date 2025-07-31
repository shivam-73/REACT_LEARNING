import { useState,useEffect } from "react"
const Clock = ({color})=>{
const [time,setTime] = useState(0);

useEffect(()=>{
    
    const Interval =  setInterval(()=>{
        setTime(new Date().toLocaleTimeString())
    },1000)

    return ()=>{clearInterval(Interval)}

},[])
    return(
        <div>
            <h1 style={{color:color , backgroundColor:"black" ,width:"275px" , padding:"10px",borderRadius:"5px"}}>{time}</h1>
        </div>
    )
}

export default Clock;


// import Clock from './TUTORIAL/T18'
// import { useState } from 'react'

// function App(){
 
// const [color,setColor] = useState('green')
//   return(
//   <div>
//     <h1>Digital clock in React js</h1>

//     <select onChange={(event)=>{setColor(event.target.value)}} style={{width:"120px"}} name="color" id="color">
//       <option  value="red">Red</option>
//       <option value="blue">Blue</option>
//       <option value="orange">Orange</option>
//       <option value="yellow">Yellow</option>
//     </select>

//     <Clock color={color}/>
//   </div>

//   )
// } 

// export default App; 