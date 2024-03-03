import React from 'react';
import Form from './Form';



export default function Card({form}) {
    return (
        <>
        <div>CARD COMPONENT</div>
        {form &&
            <Form/>
        }
        </>
    )
}