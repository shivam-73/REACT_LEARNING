function Login(){  //Default Export 
    return(
        <div>
            <h1>User Login</h1>
        </div>
    )
}

export function Profile(){ //Named export
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export function Settings(){
    return (
        <div>
            <h1>Settings</h1>
        </div>
    )
}

export default Login;

export const userKey = "agfsjgiau14q";



/*
App.jsx
import Login,{ Profile ,Settings, userKey} from './TUTORIAL/T2'
function App(){
  return (
    <>
    <Profile/>
    <Settings/>
    <Login/>
    <h1>{userKey}</h1>
    </>
  )
}

*/