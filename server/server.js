const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3001


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// middleware to set CORS headers for specific routes
const corsOptions = {
  origin: ['http://127.0.0.1:5173', 'https://karenportfolio.netlify.app'], // enabling specific domains
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}
// uses cors options on all routes
app.use(cors(corsOptions));

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, 
  auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
  }
});


//get 
app.get('/',  (req, res) => {
    res.json('Hello World!')
})



// Setup email data
let mailOptions = {
    from: `"Karen Douglas" <${process.env.SMTP_USER}>`, 
    to: `${process.env.SMTP_USER}`,
    subject: 'test ✔',
    text: 'Hello world?', 
    html: '<b>Hello world?</b>' 
}

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});

//post 
let postCount = 0;
app.post('/sendEmail', async(req, res) =>{
  postCount++
  // ensures that I only recieve one post request per fetch
    if(postCount > 1){
      postCount = 0
      return
    } 
})

app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));