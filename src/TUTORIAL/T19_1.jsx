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