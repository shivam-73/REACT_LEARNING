import { Suspense, use } from "react";

const fetchData = ()=>fetch('https://dummyjson.com/users').then((response)=>response.json())
console.log(fetchData());

const userResource = fetchData();
function App() {
  return (
    <div>
      <h1>use API in React js</h1>
      <Suspense fallback={<p>loading...</p>}>
        <Users userResource = {userResource}/>
      </Suspense>
    </div>
  )
}

const Users=({userResource})=>{
  const userData = use(userResource)
  console.log(userData);
  
  return(
    <div>
      <h1>User List</h1>
      {
        userData?.users?.map((users)=>(
          <h1>{users.firstName}</h1>
        ))
      }
    </div>
  )
}
export default App;
