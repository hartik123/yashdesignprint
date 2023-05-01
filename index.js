import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'

import connectDB from "./db/connectDB.js";
import productRoute from "./routes/productRoute.js";

const app = express();
const port = process.env.PORT || 8000
dotenv.config({ path: './.env' });
connectDB();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.get('/', (req, res)=>{
    res.send("hello")
})

app.use('/api', productRoute)

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})