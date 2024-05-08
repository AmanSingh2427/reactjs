
import './App.css';
import { useState } from "react";
import Card from './Card';

function App() {
  let user1 = {
    username: "Aman Singh",
    age: 22
  }
  let user2 = {
    username: "Abhay Ch.",
    age: 21
  }
  
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind CSS</h1>
      <Card company="Mawai Infotech" team="TERMS" user={user1} />
      <Card company="Mawai Infotech" team="SAP" user={user2} />
    </>
  );
}
export default App;




