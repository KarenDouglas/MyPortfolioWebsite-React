const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//route handler
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.listen(PORT, () => console.log(`Now listening on port: http://localhost:${PORT}`));