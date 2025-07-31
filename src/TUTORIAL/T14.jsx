import { useState } from "react";
function Skills(){
    const [skills,setSkills] = useState([])
    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item) =>item!= event.target.value)])
        }
    }
    return(
        <div>
            <h2>Select your skills</h2>
            <input onChange={handleSkills} type="checkbox" name="" id="php" value="php" />
            <label htmlFor="php">PHP</label>

            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" name="" id="js" value = "js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />

            <input onChange={handleSkills} type="checkbox" name="" id="cpp" value = "cpp"/>
            <label htmlFor="cpp">CPP</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" name="" id="java" value ="java" />
            <label htmlFor="java">Java</label>            

            <h1>{skills.toString()}</h1>
        </div>
    )
}

export default Skills;


// import Skills from './TUTORIAL/T14'
// function App(){

//   return(
//   <div>
//     <h1>Handle checkBoxes</h1>
//     <Skills/>
//   </div>

//   )
// } 

// export default App; 