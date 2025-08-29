import NavBar from "./TUTORIAL/T47";
import { Routes, Route, Navigate } from "react-router";
import About from "./TUTORIAL/T46_1";
import Login from "./TUTORIAL/T46_2"
import PageNotFound from "./TUTORIAL/T48";
import College from "./TUTORIAL/T49";
import Student from "./TUTORIAL/T49_1.JSX";
import Department from "./TUTORIAL/T49_2";
import Detail from "./TUTORIAL/T49_3";
import UserList from "./TUTORIAL/T52";
import UserDetails from "./TUTORIAL/T52_1";
function App() {

  return (
    <>
      {/* <NavBar /> */}



      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/users/list?" element={ <UserList/>}/>
          <Route path="/users/:id" element= {<UserDetails/>}/>
          <Route path="/users/:id/:name?" element= {<UserDetails/>}/>

          <Route path="in">
          <Route path="/in/user">
          <Route path="/in/user/about" element={<About />} />
          <Route path="/in/user/login" element={<Login />} />
          </Route>
          </Route>
        </Route>
        <Route path="/college" element={<College />} >
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/*" element={<PageNotFound/>}/>
        <Route path="/*" element={<Navigate to='/login' />}></Route>
      </Routes>
    </>
  )
}

export default App;
