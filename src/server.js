require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT
const cors = require('cors')
const router = require('./modules')

app.set(cors())
app.use(express.json())
app.use(router)

app.listen(PORT, console.log(PORT))

