// function User({name,age,email}){
//     return(
//         <div>
//             <h2>Name: {name}</h2>
//             <h2>Age: {age}</h2>
//             <h2>Email: {email}</h2>
//         </div>
//     )
// }


function User({user}){
    return(
        <div>
            <hr />
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    )
}
export default User;



// import User  from './TUTORIAL/T10_1'
// import College from './TUTORIAL/T10_2'
// import Student from './TUTORIAL/T10_3'
// import { useState } from 'react'
// function App(){

//   // let userName = "shivam";
//   // let age = 23;
//   // let email = "shivamgupta"

//   let userObject = {
//     name:"shivam",
//     age:23,
//     email : "shivamgupta"
//   }

//   let collegeNames = ['IET','LPU','DU','IIT','NIT','UPES']

//   let [student,setStudent] = useState("shiv")
//   return(
//     <div>
//         <h1>Props in React js</h1>
//         {student && <Student name ={student}/> } 
//         <button onClick={()=>{setStudent("mahi")}}>Update Student Name</button>


//         {/* <User name = {"shivam kumar"} age ={23} email = {"shivamgupta"} />  */}
//         {/* <User name = {userName} age = {age} email = {email}/> */}
//         <User user ={userObject}/>

//         <College names ={collegeNames}/>
//     </div>
//   )
// } 

// export default App; 
