// let guest = 0
function App() {

  return (
    <>
      <h1>Keeping Components Pure</h1>
      <Cup guest ={1}/>
      <Cup guest ={3}/>
      <Cup guest ={3}/>
      <Cup guest ={2}/>
    </>
  )
}

const Cup =({guest})=>{
  return(
    <h1>We have {guest} guest and we have to make {guest} cup of Tea</h1>
  )
}
export default App;
