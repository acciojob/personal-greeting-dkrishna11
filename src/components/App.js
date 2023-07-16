
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  let [name, setName]=useState("");
  return (
    <div>
        <input onChange={(eve)=>setName(eve.target.value)}/>
        {name && <p>Hello {name}!</p>}
    </div>
  )
}

export default App
