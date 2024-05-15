import React from 'react';
import { json, useParams } from 'react-router-dom';
import '../css/project.css'


export default function Project(props) {
    const { projectId } = useParams();
    return (
        <>
     <div className="projects-top"></div>
        <section className='card-border'>
{/* project component */}
            <section className='projects-container'>
                <header className='project-img'>
                    <img  src={props.img} alt="" />

                </header>
                <section className='project-container'>
                    <section className='project-details-container'>
                        <header className="project-title">
                            <h1>{props.title}</h1>
                        </header>
                        <ul className='project-tech-list'>
                            {props.tech && 
                            props.tech.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <article className="project-desc-container">
                            <p className="desc">{props.desc}</p>
                            <section className='project-link-group'>
                                {props.liveSite &&
                                <a 
                                href={props.liveSite}
                                target='_blank'
                                >
                                    View Site</a>
                                }
                                <a 
                                href={props.github}
                                target='_blank'
                                >
                                    View Github</a>
                            </section>
                        </article>
                    </section>
                    {/* Projects Page Links */}

                <section className='projects-list-container'>
                    <h1>Projects</h1>
                        <section>
                            <ul className='projects-list'>
                    {props.data && props.data.map((project) => (        
                                <li key={project.id}>
                                    <a href={`/projects/${project.id}`}>{project.title}</a>
                                </li>
                                
                                ))}
                            </ul>
                        </section>
                    </section> 
                </section>
            </section>

        </section>
        
        </>
    )
}