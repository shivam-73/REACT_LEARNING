function App(){
  // const userName = "Anil Sindhu"
  // let x =20;
  // let y = 30;
  // return (
  //   <>
  //     <h1>JSX in react js {userName}</h1>
  //     <h1>{1+4+6+9091}</h1>
  //     <h1>{x*y}</h1>
  //     <button onClick={()=>alert("You clicked the button")}>Click</button>
  //   </>
  // )

  // React Without JSX
   return createElement("div",{id:"rootDiv"},"Hello, I am root");  

   return createElement("div",{id:"RootDiv"},createElement("h1",{className:"Header"},"I am h1"),"I am div")

  //React With JSX
  return(
    <div className='RootDiv'>
      <h1 className='Header'>
        I am h1
      </h1>
      I am div
    </div>
  )

}

export default App; 
  