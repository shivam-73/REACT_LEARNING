import { createContext } from "react";

export const SubjectContext = createContext("Maths")


// import { useState } from "react";
// import { SubjectContext } from "./TUTORIAL/T44_1,jsx";
// import College from "./TUTORIAL/T44_2";

// function App() {
//   const [subject,setSubject] = useState('English');
//   return (
//     <div style={{backgroundColor:"yellow",padding:'10px'}}>
//       <SubjectContext.Provider value={subject}>

//         <select value={subject } onChange={(event)=>setSubject(event.target.value)} >
//           <option value="">Select Subjects</option>
//           <option value="Maths">Maths</option>
//           <option value="English">English</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Politics">Politics</option>
//           <option value="History">History</option>
//         </select>
//         <h1>Context API</h1>
//           <button onClick={()=>setSubject('')}>Clear Subject</button>
//     <College/>
//       </SubjectContext.Provider>
//     </div>
//   )
// }

// export default App;
