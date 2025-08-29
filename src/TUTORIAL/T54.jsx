import { NavLink, Outlet } from "react-router";
import './T47.css'
export default function NavBar(){
    return(
        <div>
           <div className="header">
            <div>
                <NavLink className="NavLink" to='/'><h2>Logo</h2></NavLink>
            </div>
            <div>
                <ul>
                    <li>
                        <NavLink className={({isActive})=>isActive? 'cutom-active':'link'} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink" to='/in/user/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink"  to='/in/user/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink"  to='/college'>College</NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink"  to='/users'>User</NavLink>
                    </li>
                    <li>
                        <NavLink className="NavLink"  to='/users/list'>List</NavLink>
                    </li>

                </ul>
            </div>
        </div>
        <Outlet/> 
        </div>
    )
}

