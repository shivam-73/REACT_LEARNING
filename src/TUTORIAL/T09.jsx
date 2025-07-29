import { useState  } from 'react'
function App(){
  const [count,setCount] = useState(0)

  return(
    <div>
      <h1>Multiple condition in React js</h1>

      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Counter</button>
      {
          count==0?<h1>Condition 0</h1>
          : count ==1 ? <h1>Condition 1</h1>
          : count ==2 ? <h1>Condition 2</h1>
          : <h1>Other conditions</h1>
      }
    </div>
  )
} 

export default App; 