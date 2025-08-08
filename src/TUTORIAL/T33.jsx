import { useFormStatus } from "react-dom";
function App() {

  const handleSubmit= async()=>{
    await new Promise(res=>setTimeout(res,2000));
    console.log("submit");
    
  }
  function CustomerForm(){
    const {pending} = useFormStatus()
    console.log(pending);
    
    return(
      <div>
          <input type="text" placeholder="Enter Name" />
          <br /><br />
          <input type="password" placeholder="Enter password" />
          <br /><br />
          <button disabled ={pending}>{pending? "Submitting":"Submit"}</button>
      </div>
    )
  }
  return (
    <>
        <h1>useFormStatus Hook in  </h1>
        <form action={handleSubmit} method="post">
        <CustomerForm/>
        </form>
    </>
  )
}

export default App;
