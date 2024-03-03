import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
// style imports
import '../css/navbar.css'


export default function Navbar() {
    // sets the image for menu icons
    const [button, setButton] =useState('../assets/menu-inactive.png')
    const [show, setShow] = useState(false)
    let maxSmallScreen = 460

    // shows the menu options if screen is over 400px
    useEffect(() =>{
        if(window.innerWidth >= maxSmallScreen){
            setShow(true)
        }
    },[])
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
      }, window.innerWidth)


    // handles menu click funtionality
    const handleMenuClick = () => {
        if(button ==='../assets/menu-inactive.png'){
          setButton('../assets/close-menu-button.png')
            setShow(true)
        }else{
            setButton('../assets/menu-inactive.png')
            setShow(false)
        }

    }
    return (
        <>
    <section className="nav-container">  
        {/*  MENU BUTTON*/}
        <div className="menu-btn-container">
            <button className="menu-btn inactive">        
                <img
                 src={button} 
                 alt=" inactive menu button"
                 onClick={handleMenuClick}
                 />
            </button>
        </div> 
        {/* NAVIGATION LINKS */}
       {show && <nav className="nav">
            <div className="navlink-container">
            <Link to={'/'}>About</Link>                
            </div>
            <div className="navlink-container">
            <Link to={'/projects'}>Projects</Link>
            </div>
            <div className="navlink-container">
            <Link to={'/contact'}>Contact Me</Link>
            </div>
            <div className="navlink-container">
            <Link to={'/resume'}>Resume</Link>
            </div>
        </nav>}
        </section>   
        </>
    )
}