import { useId } from "react";

function App() {
  return (
    <>  
      <UserForm/>
      <hr />
      <UserForm/> 
    </>
  )
}

export default App;


function UserForm() {
  const user = useId()

  return (
    <>  
      <form action="" >
        <label htmlFor={user + 'name'}>Enter user name: </label>
        <input type="text" id={user+'name'} placeholder="Enter name" />
        <br /><br />

        <label htmlFor={user +'password'}>Enter user password</label>
        <input type="text" id={user +'password'} placeholder="Enter password" />
        <br /><br />

        <label htmlFor={user + 'skills'}>Enter user skills </label>
        <input type="text" id={user + 'skills'} placeholder="Enter skills" />
        <br /><br />

        <input type="checkbox" id={user + 'terms'} placeholder="Terms & conditions"/>
        <label htmlFor={user + 'terms'}>Terms and condition</label>
      </form>
    </>
  )
}
