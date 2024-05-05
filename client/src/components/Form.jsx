import React , {useState} from 'react';
import '../css/form.css'

// handles on focus events and renders form
export default function Form() {
    const [userName, setUsername]= useState('')
    const [userEmail, setUserEmail] = useState('')
    const [ userMessage, setUserMessage] = useState('')

    // handles input validation
    const handleBlur = (e) => {
        const inputValue = e.target.value
        if(inputValue.trim() === ''){
          e.target.style.border = 'red 5px solid'
        }else{
            e.target.style.border = 'green 5px solid'
        }
    }
    // gets input values from contact form
    const handleUserName = (e) => {
        setUsername(e.target.value)
    }
    const handleUserEmail = (e) => {
        setUserEmail(e.target.value)
    }
    const handleUserMessage = (e) => {
        setUserMessage(e.target.value)
    }
    const url = `https://guarded-island-99459-899afe87e618.herokuapp.com`
    
    // submits input values from form
    const handleSubmit = async (e) => {
        e.preventDefault()
        const post = {userName, userEmail, userMessage}


        if(post.userName && post.userEmail && post.userMessage){
            try{
                const response = await fetch(`${url}/sendEmail`,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(post)
                })
                if(response.ok){
                    const data = await response.json()
                    console.log({data})
                    alert(data)
                    return data
                }else{
                    throw new Error('Network response was not ok')
                }
            }catch(err){
                console.error(err)
            }        
        }else{
            alert('Enter Contact info and message to submit form')
            return
        }
    }


    return (
        <>
    {/* contact form */}
    <section className='form-container'>
        <form className='form' action="">
            <div className='form-group1'>
            <input  type="text" placeholder='enter name...' onBlur={handleBlur} required onChange={handleUserName} />
            <input type="email" placeholder='enter email...' onBlur={handleBlur} required onChange={handleUserEmail} />
            </div>
           
            <div className='form-group'>
            <textarea name="message" id=""  cols="30" rows="10" onChange={handleUserMessage} ></textarea>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
        </>
    )
}