import { useState } from "react";

function App() {
  const [cardStyle,setCardStyle] = useState({
    border: '1px solid black',
    width: '200px',
    boxShadow: '3px 2px 4px 1px grey',
    margin: '10px'
  })

  const [textColor ,settextColor] = useState('black')
  const updateTheme = (bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor})
    settextColor(textColor)
   
  }

  const [grid,setGrid] = useState(true)
  return (
    <>
      <h1 style={{ color: 'red' }}>Inline Style in React js</h1>
      <button onClick={()=>updateTheme('gray','white')}>Gray Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <button onClick={()=>{setGrid(!grid)}}> 
        Toggle grid
      </button>

      <div style={{ display:grid?'flex':'block', flexWrap:'wrap'}}>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
        

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' ,color:textColor }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

      </div>

    </>

  )
}

export default App; 
