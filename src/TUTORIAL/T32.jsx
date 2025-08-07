const UserInput = (props)=>{
    return(
        <div>
            <input type="text" ref={props.ref}/>
        </div>
    )
}
export default UserInput  


// import { useRef } from "react";
// import UserInput from "./TUTORIAL/T32";
// function App() {
//   const inputRef = useRef(null);
//   const updateInput = ()=>{
//     inputRef.current.value = 1000;
//     inputRef.current.focus();
//     inputRef.current.style.color ='red'
//   }
//   return (
//     <>
//         <h1>Forward ref</h1>
//         <UserInput ref={inputRef}/>
//         <button onClick={updateInput}>Update Input Field</button>
//     </>
//   )
// }

// export default App;
