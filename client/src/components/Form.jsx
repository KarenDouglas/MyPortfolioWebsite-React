import React from 'react';
import '../css/form.css'


export default function Form() {
    return (
        <>
    {/* form */}
    <section className='form-container'>
        <form className='form' action="">
            <div className='form-group1'>
            <input  type="text" placeholder='enter name...' required />
            <input type="email" placeholder='enter email...' required />
            </div>
           
            <div className='form-group'>
            <textarea name="message" id="" placeholder='enter your message for Karen' cols="30" rows="10" > </textarea>
            <button>Submit</button>
            </div>
        </form>
    </section>
        </>
    )
}