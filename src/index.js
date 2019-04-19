const express = require('express')
const app = express()

app.use(require('./routes'))
app.use(express.json())

app.listen(3000, () => console.log('server on'))

