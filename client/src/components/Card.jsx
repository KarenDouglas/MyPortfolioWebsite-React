import React from 'react';
import Form from './Form';
import '../css/card.css'



export default function Card({form, title}) {
    return (
        <>
        <section className='card-container'>
            <section className='card-border'>
                <header className='card-title-group'>
                <h1>{title}</h1>
                <div className='div'></div>

                </header>
                {form &&
                    <Form/>
                }
            </section>
        </section>
        </>
    )
}