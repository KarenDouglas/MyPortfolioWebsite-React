import { Outlet } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'


function App() {


  return (
    <>
    <Navbar/>
      <div>
       APP
      </div>
      <Outlet/>
      
    </>
  )
}

export default App
