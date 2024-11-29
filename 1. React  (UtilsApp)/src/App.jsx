import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Stats from './Components/Stats.jsx'

function App() {
  const [Text, setText] = useState("")

  const uCase = (str) => {
    const a = str.toUpperCase();
    setText(a);
  }

  const lCase = (str) => {
    const a = str.toLowerCase();
    setText(a);
  }

  const sCase = (str) => {
    const a = str[0].toUpperCase()
    str = str.replace(str[0], a)
    setText(str);
  }

  const aCase = (str) => {
    const a = str.length;
    let index=1;
    const arr = str.split("").map((item,index)=>{
      return ((index%2!==0)?item.toUpperCase():item)
    })
    setText(arr.join(""));
  }


  const sqCase = (str) => {
    str= `'${str}'`
    setText(str)

  }


  const dqCase = (str) => {
    str= `"${str}"`
    setText(str)

  }


  const nsCase = (str) => {
    str = str.split(" ").join("")
    setText(str)
  }

  const cCase = (str) => {
      navigator.clipboard.writeText(str)
  }
  

  return (
    <>
      <Navbar />
      <h1 className='text-center my-3'>UtilsApp</h1>

      <div className='container d-flex flex-column'>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><strong>Please enter the text below:</strong></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={e => setText(e.target.value)} style={{ resize: "none", height: "200px" }} rows="3"></textarea>
        </div>
        <div className='d-flex justify-content-center flex-wrap'>
          <button type="submit" className="btn btn-primary my-2" onClick={() => uCase(Text)} style={{ margin: "0px 8px 0px 0px" }}>UPPERCASE</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => lCase(Text)}>lowercase</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => sCase(Text)}>Sentence case</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => aCase(Text)}>aLtErNaTe CaSe</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => cCase(Text)}>Copy</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => sqCase(Text)}>'Single Quotes'</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => dqCase(Text)}>"Double Quotes"</button>
          <button type="submit" className="btn btn-primary mx-2 my-2" onClick={() => nsCase(Text)}>Nospaces</button>
        </div>
        <Stats text={Text}/>
      </div>
    </>
  )
}

export default App
