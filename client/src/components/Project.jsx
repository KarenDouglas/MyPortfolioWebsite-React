import React from 'react';
import '../css/project.css'


export default function Project() {
    return (
        <>
        <div className="projects-top"></div>
        <section className='card-border'>
{/* project component */}
            <section className='projects-container'>
                <header className='project-img'>
                    <img  src="../assets/projects/scoot.png" alt="" />

                </header>
                <section className='project-container'>
                    <section className='project-details-container'>
                        <header className="project-title">
                            <h1>Website Name</h1>
                        </header>
                        <article className="project-desc-container">
                            <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis illo soluta eius minima atque sit commodi dolore assumenda numquam excepturi deleniti ipsa totam, omnis incidunt, velit maxime id odit.</p>
                            <section className='project-link-group'>
                                <a href="">View Site</a>
                                <a href="">View Github</a>
                            </section>
                        </article>
                    </section>
                    {/* Projects Page Links */}
                <section className='projects-list-container'>
                    <h1>Projects</h1>
                        <section>
                            <ul className='projects-list'>
                                <li>
                                    <a href="">example</a>
                                </li>
                                <li>
                                    <a href="">example</a>
                                </li>
                                <li>
                                    <a href="">example</a>
                                </li>
                                <li>
                                    <a href="">example</a>
                                </li>
                                <li>
                                    <a href="">example</a>
                                </li>
                                <li>
                                    <a href="">example</a>
                                </li>
                            </ul>
                        </section>
                    </section> 
                </section>
            </section>

        </section>
        
        </>
    )
}