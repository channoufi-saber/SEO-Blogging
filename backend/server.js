const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

const blogRoutes = require('./routes/blog')
const authRoutes = require("./routes/auth");

/* app */
const app = express()

/* db */
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
    .then(() => console.log('DB connected'))

/* middlewares */
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

/* cors 
if (process.env.NODE_ENV == 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }))
}*/

/* routes */
app.use('/api', blogRoutes);
app.use('/api', authRoutes);

/* PORT */
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} `)
})