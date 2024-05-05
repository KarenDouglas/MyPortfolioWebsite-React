const express = require('express')
const cors = require('cors')

require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3001
const { sendEmailConfirmation, sendEmailMessage} = require('./utils')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// middleware to set CORS headers for specific routes
const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'https://karenportfolio.netlify.app','https://karenthedeveloper.com/'], // enabling specific domains
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
// uses cors options on all routes
app.use(cors(corsOptions))

//post 
let postCount = 0;
app.post('/sendEmail', async(req, res) =>{

  try {
    const {userName, userEmail, userMessage} = req.body
    postCount++
    // ensures that I only recieve one post request per fetch
      if(postCount > 1){
        postCount = 0
        return
      }
      const message = await sendEmailMessage(userName, process.env.
      SMTP_USER, userMessage)
     await sendEmailConfirmation( userName, userEmail)

    // Check if the confirmation represents an error
      return res.status(200).json(`Email sent successfully!`)
  }catch (err){
    // Reset postCount on error
    postCount = 0;
    // Handle error
    console.error("Error:", err);
    res.status(500).json("Internal Server Error");
  }
 
})

app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));