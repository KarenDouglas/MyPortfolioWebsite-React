import React from 'react';
import Form from './Form';
import '../css/card.css'



export default function Card({form}) {
    return (
        <>
        <section className='card-container'>
            <section className='card-border'>
                <h1>title</h1>
                <div className='div'></div>
                {form &&
                    <Form/>
                }
            </section>
        </section>
        </>
    )
}