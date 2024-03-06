import React from 'react';
import '../css/about.css'


export default function AboutPage() {
    return (
        <>
        <main className="main-container">
            <picture>
                <img className='profilePic' src="../assets/profilePic.png" alt="" />

            </picture>
            <section className='pitch'>
                <h1>Compelling Title Sentence</h1>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab quia recusandae praesentium tenetur saepe rerum ipsa ratione, soluta magnam velit, ipsum est sint provident quos alias dolore perferendis! Blanditiis?
                Natus neque et maxime omnis itaque voluptatem facilis nihil, reprehenderit dignissimos minus!</p>
                <p><a className="hire" href="/contact">Hire Me</a></p>
            </section>
        </main>
        </>
    )
}