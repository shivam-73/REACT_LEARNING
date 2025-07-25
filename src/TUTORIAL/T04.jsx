function ToDo(){
    return (
        <div>
           <h1>Anil Sindhu Todos</h1>
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="Anil Singh Sindhu" className="Photo" />
            <ul style={{textAlign:"left"}}>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>

            <button onClick={()=>{
                alert("You have clicked on me")
            }}>Click me</button>  
        </div>
    )
}

export default ToDo;

/*
import ToDo from './TUTORIAL/T04'
function App(){
  return(
    <div>
      <h1>Exercise JSX</h1>
      <ToDo/>
    </div>
  )
}

export default App; 
*/