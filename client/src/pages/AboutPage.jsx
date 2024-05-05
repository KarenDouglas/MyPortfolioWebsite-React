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
                <p className="desc">As a passionate MERN stack developer, my expertise lies in crafting dynamic web applications with a focus on React and API integration. Driven by a desire to make a difference and continuously sharpen my skills, I thrive in environments where innovation and collaboration flourish. I am deeply committed to lifelong learning and find immense joy in witnessing my ideas materialize into functional and impactful web solutions. Eager to contribute my talents to a team where creativity meets purpose, I am dedicated to driving forward projects that resonate with users and drive positive change!</p>
                <p><a className="hire" href="/contact">Hire Me</a></p>
            </section>
        </main>
        </>
    )
}