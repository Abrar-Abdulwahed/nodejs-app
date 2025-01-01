require('module-alias/register')
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const corsOptions = require('@/config/corsOptions')
const bodyParser = require('body-parser')
const router = require('@/routes/root')

const app = express();
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router)

app.listen(process.env.PORT, () => console.log(`server start with port ${process.env.PORT}`))
