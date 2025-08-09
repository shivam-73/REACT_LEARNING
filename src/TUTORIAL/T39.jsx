import { useState } from "react";

function App() {
  const [data,setData] = useState([
    'anil','sam','peter','rony'
  ])

  const [dataDetails,setDataDetails] = useState([
    {name:'anil',age:25},
    {name:'peter',age:28},
    {name:'sam',age:13},
    {name:'Tony',age:67}
  ])
    const handleUser=(name)=>{
      data[data.length - 1] = name
      console.log(data)
      setData([...data])
      
    }

    const handleAge =(val)=>{
      dataDetails[dataDetails.length  -1].age = val
      console.log(dataDetails)
      setDataDetails([...dataDetails])
      
    }
  return (
    <>  

      <h1>Updating Array in State</h1>

      <input onChange={(e)=>handleUser(e.target.value)} type="text" placeholder="Enter last user name" />
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

      <input onChange={(e)=>handleAge(e.target.value)} type="number" placeholder="Enter last user age" />

      {
        dataDetails.map((item,index)=>(
          <h4 key = {index}>{item.name} : {item.age}</h4>
        ))
      } 
    </>
  )
}

export default App;
