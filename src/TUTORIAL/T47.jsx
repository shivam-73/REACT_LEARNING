import { Link } from "react-router";
import './T47.css'
export default function NavBar(){
    return(
        <div className="header">
            <div>
                <Link className="link" to='/'><h2>Logo</h2></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="link"  to='/login'>Link</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


// import NavBar from "./TUTORIAL/T47";
// import { Routes ,Route} from "react-router";
// import About from "./TUTORIAL/T46_1";
// import Login from "./TUTORIAL/T46_2"
// function App() {

//   return (
//     <>
//       <NavBar />

//       <Routes>
//         <Route path="/" element={<h1>Home Page</h1>} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   )
// }

// export default App;
