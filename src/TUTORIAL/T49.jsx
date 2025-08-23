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