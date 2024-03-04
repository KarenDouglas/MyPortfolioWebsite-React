import React from 'react';
import Form from './Form';
import '../css/card.css'
import '../css/resume.css'




export default function Card({form, title, text}) {
    return (
        <>
        <section className='card-container'>
            <section className='card-border'>
                <header className='card-title-group'>
                <h1>{title}</h1>
                <div className='div'></div>
                </header>
                {text && 
                <section className='resume-container'>
                   <h1>Download PDF</h1>
                   <p>Click the link below to download  my resume (PDF):</p>
                   <a href="../assets/Karen_Douglas_Resume.pdf" download>Download PDF</a>
                 </section>
                }
                {form &&
                    <Form/>
                }
            </section>
        </section>
        </>
    )
}