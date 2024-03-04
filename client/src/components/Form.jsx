import React from 'react';
import '../css/form.css'


export default function Form() {
    const handleBlur = (e) => {
        const inputValue = e.target.value
        if(inputValue.trim() === ''){
          e.target.style.border = 'red 5px solid'
        }else{
            e.target.style.border = 'green 5px solid'
        }
    }


    return (
        <>
    {/* form */}
    <section className='form-container'>
        <form className='form' action="">
            <div className='form-group1'>
            <input  type="text" placeholder='enter name...' onBlur={handleBlur} required />
            <input type="email" placeholder='enter email...' onBlur={handleBlur} required />
            </div>
           
            <div className='form-group'>
            <textarea name="message" id=""  cols="30" rows="10" defaultValue="enter message"></textarea>
            <button type='submit'>Submit</button>
            </div>
        </form>
    </section>
        </>
    )
}