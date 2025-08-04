import style, { styled } from "styled-components"
function App() {
  // const Heading = style.h1`
  // color:red;
  // border:1px solid black;
  // border-raius:5px;
  // margin:20px;
  // padding:10px;
  // ` 

  const Heading = styled.h1({
    border:"1px solid black",
    color:'red',
    borderRadius:'5px',
    padding:'10px',
    margin:'20px'
  })

  const StyleBtn = styled.button`
  color:red;
  width:130px;
  height:40px;
  margin:20px;`
  return (
    <>
      <h1>Styled components with React js</h1>
      <Heading>Hello Sir 1</Heading>
      <Heading>Hello Sir 2</Heading>
      <Heading>Hello Sir 3</Heading>
      <Heading>Hello Sir 4</Heading>
      <StyleBtn>Log In</StyleBtn>
    </>
  )
}

export default App; 