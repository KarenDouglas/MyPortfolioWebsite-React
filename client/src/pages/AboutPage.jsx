import React, {useEffect} from 'react';
import '../css/about.css'


export default  function AboutPage() {

    return (
        <>
        <main className="main-container">
            <picture>
                <img className='profilePic' src="../assets/profilePic.png" alt="" />

            </picture>
            <section className='pitch'>
                <h1>Transforming Ideas into Dynamic Web Experiences</h1>
                <p className="desc">As a passionate MERN stack developer, my expertise lies in crafting dynamic web applications with a focus on React and API integration. Driven by a desire to make a difference and continuously sharpen my skills, I thrive in environments where innovation and collaboration flourish. </p>
                <p><a className="hire" href="/contact">Hire Me</a></p>
            </section>
        </main>
        </>
    )
}