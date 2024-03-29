const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(require('./routes'))
app.use(express.json())

app.listen(process.env.PORT || 3000, () => console.log('server on'))

