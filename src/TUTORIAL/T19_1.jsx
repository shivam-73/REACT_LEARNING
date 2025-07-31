import Students from "./T19_2";

const College = ({college})=>{
    console.log(college)
    return(
        <div style={{
            borderBottom:"2px solid white" ,
            margin:"20px",
            padding:"20px" , 
            backgroundColor:"purple",
            borderRadius:"5px",
            color:"white"}}
        >
            <h2>Name: {college.name}</h2>
          <ul style={{listStyleType:"None"}}>
            <li>
              <h3>City: {college.city}</h3>
            </li>
            <li>
              <h3>Website: {college.website}</h3>
            </li>
            <li>
                <Students student={college.student}/>
            </li>
          </ul> 
        </div>
    )
}
export default College;


// import College from './TUTORIAL/T19_1';

// function App(){

// const collegeData = [
//   {
//     name:"IET Alwar",
//     city: "Alwar",
//     website:"www.iet.com",
//     student: [
//       {
//         name:"Shivam",
//         age:23,
//         email:"shivam@gmail"
//       },
//             {
//         name:"Aditya",
//         age:22,
//         email:"aditya@gmail"
//       },
//             {
//         name:"Adil",
//         age:25,
//         email:"adil@gmail"
//       },
//     ]
//   },
//     {
//     name:"IIT Delhi",
//     city:"Delhi",
//   website:"www.iit.com",
//       student: [
//       {
//         name:"Shivam",
//         age:23,
//         email:"shivam@gmail"
//       },
//             {
//         name:"Aditya",
//         age:22,
//         email:"aditya@gmail"
//       },
//             {
//         name:"Adil",
//         age:25,
//         email:"adil@gmail"
//       },
//     ]
//   },
//     {
//     name:"LPU Jalandhar",
//     city:"Jalandhar",
//     website:"www.lpu.com",
//         student: [
//       {
//         name:"Shivam",
//         age:23,
//         email:"shivam@gmail"
//       },
//             {
//         name:"Aditya",
//         age:22,
//         email:"aditya@gmail"
//       },
//             {
//         name:"Adil",
//         age:25,
//         email:"adil@gmail"
//       },
//     ]
//   },
//     {
//     name:"NIT Kanpur",
//     city:"kanpur",
//     website:"www.nit.com",
//         student: [
//       {
//         name:"Shivam",
//         age:23,
//         email:"shivam@gmail"
//       },
//             {
//         name:"Aditya",
//         age:22,
//         email:"aditya@gmail"
//       },
//             {
//         name:"Adil",
//         age:25,
//         email:"adil@gmail"
//       },
//     ]
//   },
// ]
//   return(
//   <div>
//     <h1>Nesting Looping with Nested Array</h1>
//     {
//       collegeData.map((college,index)=>(
//         <div key = {index}>
//           <College college = {college}/>
//         </div>
//       ))
//     }
//   </div>

//   )
// } 

// export default App; 