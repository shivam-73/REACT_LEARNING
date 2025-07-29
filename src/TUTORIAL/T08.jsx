function User(){
    return(
        <div>
            <h1>Shivam Kumar</h1> 
        </div>
    )
}

export default User;

/*

import { useState  } from 'react'
import User from './TUTORIAL/T08'
function App(){
  const [display,setdisplay] = useState(true)

  return(
    <>
      <h1>Toggle in React js</h1>
      <button onClick={()=>{setdisplay(!display)}}>Toggle </button>
      {
        display? <h1><User/></h1>: <h1>No user name</h1>
      }
    </>
  )
} 

export default App;
*/ 