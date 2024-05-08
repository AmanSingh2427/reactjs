import { useState } from "react";

function Count(){
    const [count,setCount]=useState(0);

const add=()=>{
    if(count<10){
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        // setCount(count+1);
        // setCount(count+1);
        setCount(count-1);
    }
    else{
        setCount(10);
    }
} 
const sub=()=>{
    if(count>0){
        setCount(count-1);
    }
    else{
        setCount(0);
    }
}
   return(
    <>
    <h2>Count: {count}</h2>
    <button onClick={add}>Add+</button>
    <button onClick={sub}>Sub-</button>
    </>
   )
}

export default Count;

