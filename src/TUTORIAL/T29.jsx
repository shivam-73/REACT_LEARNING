import { useRef } from "react";
function App() {
  const inputRef = useRef(null);
const h1Ref = useRef(null);

  const inputHandler = () => {
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
  }
  const togglehandler = () => {
    if (inputRef.current.style.display != 'none') { 
      inputRef.current.style.display ='none'
     }
    else { 
      inputRef.current.style.display = 'inline'
     }
  }

  const h1handler=()=>{
    h1Ref.current.style.color = 'green'
  }
  return (
    <>
      <h1>useRef

      </h1>
      <button onClick={togglehandler}>Toggle
      </button>
      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <button onClick={inputHandler}>Focus on input field</button>

      <h1 ref={h1Ref}>Code Step by Step</h1>
      <button onClick={h1handler}>handler</button>
    </>
  )
}

export default App; 
