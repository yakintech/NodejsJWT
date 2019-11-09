const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const { signIn, admin, refresh } = require('./handlers')

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/signin', signIn)
app.get('/admin', admin)
app.post('/refresh', refresh)

app.listen(8000)
