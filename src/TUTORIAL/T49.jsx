import { NavLink, Outlet } from "react-router";

export default function College(){
    return(
        <div  className = "college" style={{textAlign:"center"}}>
            <h1>College page</h1>

            <NavLink className="link" to='student'>Student</NavLink>
            <NavLink className="link" to='department'>Departments</NavLink>
            <NavLink className="link" to='detail'>College Details</NavLink>
            <Outlet/>
        </div>
    )
}


// import NavBar from "./TUTORIAL/T47";
// import { Routes ,Route, Navigate} from "react-router";
// import About from "./TUTORIAL/T46_1";
// import Login from "./TUTORIAL/T46_2"
// import PageNotFound from "./TUTORIAL/T48";
// import College from "./TUTORIAL/T49";
// import Student from "./TUTORIAL/T49_1.JSX";
// import Department from "./TUTORIAL/T49_2";
// import Detail from "./TUTORIAL/T49_3";
// function App() {

//   return (
//     <>
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<h1>Home Page</h1>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/college" element={<College/>} >
//         <Route path="student" element={<Student/>}/>
//         <Route path="department" element={<Department/>}/>
//         <Route path="detail" element={<Detail/>}/>
//         </Route>
//         {/* <Route path="/*" element={<PageNotFound/>}/> */}
//         <Route path="/*" element={<Navigate to='/login'/>}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App;
