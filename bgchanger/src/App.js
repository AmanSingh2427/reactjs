
import './App.css';
import { useState } from "react";

function App() {
  const [color, setColor] = useState('olive')
  
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-content-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button className='outline-none px-4 py-1 rounded-full text-dark shadow-lg' style={{backgroundColor: "white" }} onClick={()=>setColor("white")}>White</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "violet"}} onClick={()=>setColor("violet")}>Violet</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "pink"}} onClick={()=>setColor("pink")}>Pink</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "brown"}} onClick={()=>setColor("brown")}>brown</button>
        <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "olive"}} onClick={()=>setColor("olive")}>olive</button> 
        </div>
      </div>
    </div>

  );
}

export default App;
