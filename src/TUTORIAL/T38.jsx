import { useState } from "react";

function App() {

  const [data,setData] = useState({
    name:'Shivam',
    address:{
      city:'Delhi',
      country:'India'
    }
  })
  const handleName =(val)=>{
    data.name = val;
    setData({...data})
    
  }
  const handleCity =(val)=>{
    data.address.city = val;
    console.log(data);
    
    setData({...data,address:{...data,address,city}})
  }
  return (
    <>
      <h1>Updating object in State</h1>

      <input onChange={(event)=>{
        handleName(event.target.value)
      }} type="text" placeholder="Update Name"/>
      <input onChange={(event)=>{
        handleCity(event.target.value)
      }} type="text" placeholder="Update City"/>

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  )
}

export default App;
