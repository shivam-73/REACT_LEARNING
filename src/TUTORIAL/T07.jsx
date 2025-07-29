import { useState } from "react";
const Counter =()=>{
    const [count,setCount] = useState(0);
    const [rCounter,setRCounter] = useState(10);
    return(
        <div>
            <h1>Counter: {count}</h1>
            <h2>Rcounter: {rCounter}</h2>
            <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
            <button onClick={()=>{setRCounter(rCounter-1) }}>Update R counter</button>
        </div>
    )
}
export default Counter;

// import { useState } from 'react';
// import Counter from './TUTORIAL/T07';
// function App(){
//   // let  fruit = "apple";

//   // const fruitChange =()=>{
//   //   fruit = "banana"
//   //   console.log(fruit)
//   // }
//   const [fruit,setFruit] = useState("Apple");

//   const handleFruit = ()=>{
//     setFruit("banana");
//   }
//   return(
//     <div>
//       {/* <h1>{fruit}</h1>
//       <button onClick={fruitChange}>Change fruit name</button> */}

//       <h1>State in React js</h1>
//         <h1>{fruit}</h1>
//         <button onClick={handleFruit}>Change fruit Name</button>
//         <Counter/>
//     </div>
//   )
// } 

// export default App; 
