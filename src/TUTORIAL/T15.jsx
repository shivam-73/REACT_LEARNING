
import { useState } from 'react'
function App(){
  const [gender,setGender] = useState('Male')
  const [city,setCity] = useState('delhi');
  return(
  <div>
    <h1>Handle Radio and Dropdown</h1>

    <h4>Select Gender: {gender} </h4>
    <input onChange={(event)=>{setGender(event.target.value)}} type="radio" name="gender" id="male" value="Male" checked={gender=='Male'}/>
      <label htmlFor="male">Male</label>
    <input onChange={(event)=>{setGender(event.target.value)}} type="radio" name="gender" id="female" value="Female" checked={gender=='Female'}/>
      <label htmlFor="female">Female</label>

      <br /><br /><br />

      <h2>Select City</h2>
      <select onChange={(event)=>{setCity(event.target.value)}} defaultValue={'delhi'}>
        <option value="noida">Noida</option>
        <option value="gurugram">Gurugram</option>
        <option value="delhi">Delhi</option>
      </select>

      <h2>Selected City: {city}</h2>
  </div>

  )
} 

export default App; 