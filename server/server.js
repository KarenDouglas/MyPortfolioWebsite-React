const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001;


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

//get 
app.get('/',  (req, res) => {
    res.json('Hello World!')
})

//post 
app.post('/sendEmail', (req, res) =>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));