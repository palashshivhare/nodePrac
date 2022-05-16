const express = require('express')
const app = express()
const port = 5001
const test = require('./controller/test')
const bodyparser = require('body-parser')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(bodyparser())

app.post('/', test.create)
app.get('/', test.getAll)
app.delete('/:_id', test.delete)
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})