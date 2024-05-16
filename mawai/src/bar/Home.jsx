import React from 'react'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import UIComponent from './UIComponent'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="flex">
        <Dashboard />
        <UIComponent />
      </div> */}
       <Dashboard /> 
       <UIComponent />
    </div>
  )
}

export default Home