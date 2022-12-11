const express = require('express')


const app = express()


app.get('/', (req, res) => {
  res.send('ok')
  console.log('V1,',req.headers)
})

app.listen(8080,() => {
    console.log('App listening on port 8080')
})