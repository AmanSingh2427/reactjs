import { useState } from 'react'
import './App.css';
import { NavLink,Link } from "react-router-dom";
import AddTodo from './component/AddTodo';
import Todos from './component/Todo';

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    <link rel="stylesheet" href="www.google.com" />
    console.log("Hello Aman Singh");
  }

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App;

