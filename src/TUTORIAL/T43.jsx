//Custom Hook

// import { useState } from "react";
// const useToggle =(defaultVal)=>{
    
//     const [value,setValue] = useState(defaultVal)

//     function toggleValue(val){
//         if(typeof val != 'boolean'){
//             setValue(!value);
//         }else{
//             setValue(val)
//         }
//     }
//     return [value,toggleValue];
// }

// export default useToggle;


// import useToggle from "./TUTORIAL/T43";

// function App() {
//   const [value,toggleValue] = useToggle(true);
//   const [data,setData] = useToggle(true)
//   return (
//     <div>
//       <button onClick={toggleValue}>Toggle Heading</button>
//       <button onClick={()=>{toggleValue(false)}}>Hide heading</button>
//       <button onClick={()=>{toggleValue(true)}}>Show heading</button>
//       {
//         value ?<h1>Custom Hooks in React js</h1>:null
//       }
//       <hr />
//       <button onClick={setData}>Toggle Heading</button>
//       <button onClick={()=>{setData(false)}}>Hide heading</button>
//       <button onClick={()=>{setData(true)}}>Show heading</button>
//       {
//         data?<h1>Second heading</h1>:null
//       }
//     </div>
//   )
// }

// export default App;
