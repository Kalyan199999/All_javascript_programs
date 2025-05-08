const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connect = require('./connection/connect');

const userRouter = require('./route/userRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.use('/user', userRouter);

app.listen( PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    connect()
} )