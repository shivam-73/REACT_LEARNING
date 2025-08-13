import { Link } from "react-router";

function PageNotFound(){
    return(
        <div style={{textAlign:'center'}}>
            <Link to='/'>Go to home Page</Link>
            <img style={{width:"100vw" , height:"60vh"}} src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png" alt="" />
        </div>
    )
}
export default PageNotFound;

// import NavBar from "./TUTORIAL/T47";
// import { Routes ,Route, Navigate} from "react-router";
// import About from "./TUTORIAL/T46_1";
// import Login from "./TUTORIAL/T46_2"
// import PageNotFound from "./TUTORIAL/T48";
// function App() {

//   return (
//     <>
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<h1>Home Page</h1>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/*" element={<PageNotFound/>}/> */}
//         <Route path="/*" element={<Navigate to='/login'/>}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App;
