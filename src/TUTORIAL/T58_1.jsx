import { useState , useEffect } from "react";

function UserList() {
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
      <h1>Make Routes and Pages for Add User and user List UI</h1>
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

export default UserList;

// import { Routes ,Route, NavLink} from 'react-router';
// import './App.css'
// import UserList from './TUTORIAL/T58_1';
// import UserAdd from './TUTORIAL/T58_2';
// function App() {

//   return (
//     <div>
//       <ul  className='nav-list' >
//         <li>
//           <NavLink to="/">List</NavLink>
//         </li>
//         <li>
//           <NavLink to="/add">Add User</NavLink>
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" element = {<UserList/>}/>
//         <Route path="/add" element = {<UserAdd/>}/>
//       </Routes>

//     </div>
//   )
// }

// export default App;
