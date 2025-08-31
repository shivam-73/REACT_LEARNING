import { useState , useEffect } from "react";
import './App.css'
function App() {
  const [userData,setuserData] = useState([]);
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    getUserData();
  },[])
  const getUserData = async()=>{
    const url = "http://localhost:3000/users"
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setuserData(response)
    setLoading(false);
  }
  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>
      <ul className="user-list head">
          <li>Name</li>
          <li>Age</li>
          <li>Email</li>
      </ul>
      {
        !loading?
        userData && userData.map((user)=>(
         <ul key ={user.name} className="user-list">
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
         </ul>
        )): <h1>Loading...</h1>
      }
    </div>
  )
}

export default App;
