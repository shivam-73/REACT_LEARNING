function College({names}){

    return(

        <div>
            <hr />
            <h1>{names[2]}</h1>
        </div>
    )
}

export default College;



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
