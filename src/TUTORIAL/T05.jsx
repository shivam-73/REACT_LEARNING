function App(){
  const name = "Peter";
  const obj ={
    name:"shivam",
    age:23,
    email:"shivam@gmail.com"
  }

  let x = 10;
  let y =20;

  function fruit(){
      return "Apple"
  }
  function sum(a,b){
    return a+b
  }

  function operation(a,b,op){
    let result=0;

    if(op == '+')return a+b;
    else if(op == '-')return a-b;
    else return a *b;
  }

  let path = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"

  return(
    <div>
      <h1>JSX With Curly Braces</h1>
      <h2>{name?name:"user not found"}</h2>
      <h3>{x+y}</h3>
      <h4>{fruit()}</h4>
      <h5>{sum(x,y)}</h5>
      <h6>{operation(x,y,'-')}</h6>
      <h1>{obj.name}</h1> 
      <h1>{obj.age}</h1>
      <h1>{obj.email}</h1>
      <input type="text" placeholder={obj.name}/>
      <br />
      <br />
      <img src={path} style={{height:150,width:150}}/> 
    </div>
  )
} 

export default App; 
