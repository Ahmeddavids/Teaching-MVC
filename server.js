require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const DB = process.env.DATABASE;
const farmRouter = require('./route/farmRouter')

const app = express();

app.use(express.json());

app.use(farmRouter);

mongoose.connect(DB).then(() => {
    console.log('Database connected successfully');
}).catch((e) => {
    console.log('Error connecting to Database: ', e.message);
});

app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})
