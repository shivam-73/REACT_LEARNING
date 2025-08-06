import { useRef } from "react";
function App() {
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const handleForm =(event)=>{
     event.preventDefault();
     const user = document.querySelector('#user').value;
     const pass = document.querySelector('#password').value;

     console.log(user, pass);
  }
  const handleFormRef = ( event)=>{
    event.preventDefault();
    const user = userRef.current.value;
    console.log('handleFormRef',user);
    const password = passwordRef.current.value;
    console.log(password );
    
    
  }
  return (
    <>
    <h1>uncontrolled Component</h1>
    <form action="" method="post" onSubmit={handleForm}>
      <input type="text" id="userRef" placeholder="Enter user name"/>
      <br /><br />
      <input type="password" id="passwordRef" placeholder="Enter password"/>
      <br /><br />
      <button>Submit</button>
    </form>

    <hr />
        <h1>uncontrolled Component With useRef</h1>
        <form action="" method="post" onSubmit={handleFormRef}>
      <input ref={userRef} type="text" id="user" placeholder="Enter user name"/>
      <br /><br />
      <input  ref = {passwordRef}type="password" id="password" placeholder="Enter password"/>
      <br /><br />
      <button>Submit With Ref</button>
    </form>

    </>
  )
}

export default App; 
