import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SideBar from './SideBar.jsx';
// import Side from './Side.jsx';
// import Dashboard from './bar/Dashboard.jsx'
// import Navbar from './bar/Navbar.jsx';
import Home from './bar/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SideBar/> */}
    {/* <Side/> */}
   <Home/>
  </React.StrictMode>,
)
