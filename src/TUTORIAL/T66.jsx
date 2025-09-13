import { useEffect, useState } from "react";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"))
  const [r, setR] = useState(colors && colors.r?colors.r:0);
  const [g, setG] = useState(colors && colors.g?colors.g:0);
  const [b, setB] = useState(colors && colors.b?colors.b:0);
  
  const save =()=>{
      localStorage.setItem("color",JSON.stringify({r,g,b}))
  }
  return (
    <div>
      <h1>Color Mixer</h1>
      <div style={{ height: 200, width: 200, backgroundColor: `rgb(${r},${g},${b})` }}></div>

      <label htmlFor="red">Red</label>
      <input type="range" value={r} onChange={(event) => setR(event.target.value)} name="red" id="red" min={0} max={255} />
      <br /><br />
      <label htmlFor="green">Green</label>
      <input type="range" value={g} onChange={(event) => setG(event.target.value)} name="green" id="green" min={0} max={255} />
      <br /><br />
      <label htmlFor="blue">Blue</label>
      <input type="range" value={b} onChange={(event) => setB(event.target.value)} name="blue" id="blue" min={0} max={255} />
      <br /><br />

      <button onClick={save}>Save Combination</button>
      <ul style={{ margin: 0, padding: 0 }}>
        <h3>The value of RGB</h3>
        <li>Value of R = {r}</li>
        <li>Value of G = {g}</li>
        <li>Value of B = {b}</li>
      </ul>
    </div>
  )
}
export default App;