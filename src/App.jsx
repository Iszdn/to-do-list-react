import { useState } from 'react';
import './App.css';
function App() {

// const [count,setCount]=useState(0)
const [todos,setTodos]=useState([])
const [text,setText]=useState("")

const handleChange=(e)=>{
setText(e.target.value);
}


const handleClick=(e)=>{
  e.preventDefault()
if (text) {
  const data=[... todos,text]
  setTodos(data)
  
}
else{
  alert("bosdur")
}

}
const deleteText=(e)=>{
e.preventDefault()

}
  return (
    <div className="App">
    {/* <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>artir</button>
    <button onClick={()=>setCount(count-1)}>azalt</button> */}

    <form onSubmit={handleClick}>
      <label htmlFor="">To do</label>
      <input type="text" value={text} onChange={handleChange} />
      <input type="submit" />
    </form>
    <ul>
      {
        todos && todos.map((item)=>(
<li>{item} <span onClick={deleteText}>x</span></li>
        ))
      }
      
    </ul>
    </div>
  );
}

export default App;
