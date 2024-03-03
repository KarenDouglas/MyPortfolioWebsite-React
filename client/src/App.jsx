import { Outlet } from 'react-router-dom';
import { useState } from 'react'
// styles
import './css/resets.css';
import './css/index.css';
// components
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {


  return (
    <>
    <Navbar/>
      <div>
       APP
      </div>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
