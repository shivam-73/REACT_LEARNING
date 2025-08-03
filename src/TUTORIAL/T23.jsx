function App() {
  const cardStyle = {
    border: '1px solid black',
    width: '200px',
    boxShadow: '3px 2px 4px 1px grey',
    margin: '10px'
  }
  return (
    <>
      <h1 style={{ color: 'red' }}>Inline Style in React js</h1>
      <div style={{ display: "flex", flexWrap:'wrap'}}>
        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

                <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
                <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
                <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>
                <div style={cardStyle}>
          <img style={{ width: '200px' }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          <div style={{ padding: '5px' }}>
            <h4>Shivam Kumar</h4>
            <p>Software Developer</p>
          </div>
        </div>

      </div>

    </>

  )
}

export default App; 
