require('module-alias/register')
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const corsOptions = require('@/config/corsOptions')
const bodyParser = require('body-parser')
const projectRoutes = require('@/routes/project')
const authRoutes = require('@/routes/auth')
const sequelize = require('@/config/db');
const errorHandler = require('@/middlewares/errorHandler');

const app = express();
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/v1', projectRoutes)
app.use('/api/v1', authRoutes)


app.use(errorHandler)
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to the database:', err));


app.listen(process.env.PORT, () => console.log(`server is running on port ${process.env.PORT}`))
