export default function User(){
    return(
        <div>
            <h1>User Name is Shivam Gupta</h1>
        </div>
    )
}



// import { lazy, Suspense, useState } from "react";
// // import User from "./TUTORIAL/T64";
// const User = lazy(()=>import('./TUTORIAL/T64'))
// function App() {
//   const [load , setLoad] = useState(false)
//   return (
//     <div>
//       <h1>Lazy Loading</h1>
//       <button onClick={()=>setLoad(true)}>Load User</button>
//       {
//         load ? <Suspense fallback={<h3>loading...</h3>}><User/></Suspense>:null
//       }

//     </div>
//   )
// }

// export default App;
