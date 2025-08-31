import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [usersData,setusersData] = useState([]);
  useEffect(()=>{
      getUserData();
  },[])
  async function getUserData(){
    const url = "https://dummyjson.com/users";
    let response =await fetch(url)
    response = await response.json(); 
    setusersData(response.users);
  }

  console.log(usersData);
  
  return (
    <div>
      <h1>Fetch data from API</h1>
      <ul className="user-list head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>
      {
        usersData && usersData.map((user)=>(
        <ul className="user-list">
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
        </ul>
        ))
      }
    </div>
  )
}

export default App;
