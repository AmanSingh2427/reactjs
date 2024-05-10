import { useState } from 'react'
import './App.css';
import { NavLink,Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const add = () => {
    <link rel="stylesheet" href="www.google.com" />
    console.log("Hello Aman Singh");
  }

  return (
    <>
      <div className="bg-green-600 p-4 m-4 rounded-xl inline">Aman Singh</div>
      <br/>
      <button className='bg-red-300 p-4 m-4 rounded-xl' onClick={add}>Add+</button>
      <br/>
      <br/>
      <br/>
      <h1>Hello Aman Singh</h1>
    </>
  )
}

export default App;

// We recommend using the pre-typed useAppSelector and useAppDispatch hooks shown above.
// If you prefer not to use those, here is how to type the hooks by themselves.

// When writing selector functions for use with useSelector, you should explicitly define the type of the state parameter.
//  TS should be able to then infer the return type of the selector, which will be reused as the return type of the useSelector hook:

// By default, the return value of useDispatch is the standard Dispatch type defined by the Redux core types, so no declarations are needed:

// If you have a customized version of the Dispatch type, you may use that type explicitly:

// Typing the connect higher order component Inferring The Connected Props Automatically connect consists of two functions that are called
// sequentially. The first function accepts mapState and mapDispatch as arguments, and returns a second function. The second function accepts
// the component to be wrapped, and returns a new wrapper component that passes down the props from mapState and mapDispatch. Normally, both
// functions are called together, like connect(mapState, mapDispatch)(MyComponent).
