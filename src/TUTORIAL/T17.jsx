const User = ({data})=>{
    return(
        <div style={{border:"2px solid white", padding:"10px", margin:"10px" , width:"400px" , borderRadius:"10px"}}>
            <h3>ID: <span style={{color:"green"}}> {data.id}</span></h3>
            <h3>NAME: <span style={{color:"yellow"}}>{data.id}</span></h3>
            <h3>AGE: <span style={{color:"skyblue"}}>{data.age}</span></h3>
            <h3>EMAIL: <span style={{color:"orange"}}>{data.email}</span></h3>
        </div>
    )
}

export default User;

// import User from './TUTORIAL/T17'
// function App(){
//   const userData=[
//     {name:'Anil',
//     age:29,
//     email:'anil@gmail',
//     id : 1
//     },
//         {name:'Shivam',
//     age:23,
//     email:'shivam@gmail',
//     id : 2
//     },
//         {name:'Adi',
//     age:34,
//     email:'adi@gmail',
//     id : 3
//     },
//         {name:'Peter',
//     age:55,
//     email:'Peter@gmail',
//     id : 4    
//   }
//   ]
//   return(
//   <div>
//     <h1>Reuse component in Loop</h1>
//     {
//       userData.map((user)=>(
//         <div key = {user.id}>
//           <User data={user}/>
//         </div>
//       ))
//     }
//   </div>

//   )
// } 

// export default App; 
