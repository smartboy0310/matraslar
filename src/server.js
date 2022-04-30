require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./modules')

app.use(cors())
app.use(express.json())
app.use('/public', express.static(path.resolve(__dirname, '../public')))
app.use(router)

app.listen(PORT, console.log(PORT))

