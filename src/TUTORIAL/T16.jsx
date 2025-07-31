import { useState } from 'react'
function App(){

  // const username1 = "Anil Sindhu";
  // const username2 = "Shivam Kumar";
  // const username3 = "aditya raj pandey"

  const userName = ['Anil Sindhu' , 'Shivam Kumar','Aditya raj pandey'];

  const userData=[
    {name:'Anil',
    age:29,
    email:'anil@gmail',
    id : 1
    },
        {name:'Shivam',
    age:23,
    email:'shivam@gmail',
    id : 2
    },
        {name:'Adi',
    age:34,
    email:'adi@gmail',
    id : 3
    },
        {name:'Peter',
    age:55,
    email:'Peter@gmail',
    id : 4    
  }
  ]
  return(
  <div>
      <h1>Loop in JSX with map Function</h1>
      <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(          
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>)
            )
          }
        </tbody>
      </table>


      <h1>Dummy Data</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anil</td>
              <td>34</td>
              <td>anil@test</td>
          </tr>
            <tr>
              <td>2</td>
              <td>Adi</td>
              <td>45</td>
              <td>adi@test</td>
          </tr>
            <tr>
              <td>3</td>
              <td>Shivam</td>
              <td>22</td>
              <td>shivam@test</td>
          </tr>
            <tr>
              <td>4</td>
              <td>Sunny</td>
              <td>23</td>
              <td>saniya@test</td>
          </tr>
           
          </tbody>
      </table>
  </div>

  )
} 

export default App; 
 