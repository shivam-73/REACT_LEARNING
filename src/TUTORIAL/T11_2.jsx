function Wrapper({children, color = "green"}){
    return(
        <div style={{color:color , border: "5px solid black" ,width:"300px", margin:"10px"}}>
            {children}
        </div>
    )
}
export default Wrapper;

// import User from './TUTORIAL/T11_1'
// import Wrapper from './TUTORIAL/T11_2'
// function App(){
//   return(
//     <div>
//       <h1>Props in React js</h1>
//       {/* <User name = "shivam"/>
//       <User/>
//       <User name = "Sam"/> */}

//       <Wrapper color = "orange">
//             <h2>Hello, EveryOne</h2>
//       </Wrapper>

//         <Wrapper>
//             <h2>Hello, Adi</h2>
//       </Wrapper>
//         <Wrapper color="yellow">
//             <h2>Hello, Adi</h2>
//       </Wrapper>
//     </div>
//   )
// } 

// export default App; 
