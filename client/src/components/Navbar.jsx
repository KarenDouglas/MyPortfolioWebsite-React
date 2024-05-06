import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
// style imports
import '../css/navbar.css'


export default function Navbar() {
    const OPEN = 'OPEN'
    const CLOSE  = 'CLOSE'
    const menuBtn = useRef(null)
    // sets the image for menu icons
    const [button, setButton] =useState(CLOSE)
    const [show, setShow] = useState(false)
    let maxSmallScreen = 460

    // shows menu options if screen is resized and over 400px
    useEffect(() => {
        const handleResize = () => {

            if(window.innerWidth >= maxSmallScreen){
                setShow(true)
            }else{
                setShow(false)
            }
        };
    
        // Initial check
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [])


    // handles menu click funtionality
    const handleMenuClick = (e) => {
        if(button === CLOSE){
            menuBtn.current.classList.add('active')
          setButton(OPEN)
            setShow(true)
            return
        }
        if(button === OPEN){
            menuBtn.current.classList.remove('active')
            setButton(CLOSE)
            setShow(false)
            return
        }

    }
    // handles navigation link functionality
    const handleMenuReset = () => {
        if(window.innerWidth <= maxSmallScreen){
            setShow(false)
            setButton(CLOSE)
            menuBtn.current.classList.remove('active')
        }
    } 
    return (
        <>
    <section className="nav-container">  
        {/*  MENU BUTTON*/}
        <div className="menu-btn-container">
            <button onClick={handleMenuClick}className="menu-btn" ref={menuBtn}>        
            <span className="m-span"></span>
            <span className="m-span"></span>
            <span className="m-span"></span>
            </button>
        </div> 
        {/* NAVIGATION LINKS */}
       {show && <nav className="nav">
            <div className="navlink-container">
            <Link to={'/'} onClick={handleMenuReset}>About</Link>                
            </div>
            <div className="navlink-container">
            <Link to={'/projects'} onClick={handleMenuReset}>Projects</Link>
            </div>
            <div className="navlink-container">
            <Link to={'/contact'} onClick={handleMenuReset}>Contact Me</Link>
            </div>
            <div className="navlink-container">
            <Link to={'/resume'} onClick={handleMenuReset}>Resume</Link>
            </div>
        </nav>}
        </section>   
        </>
    )
}