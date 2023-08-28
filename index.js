import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

//import the users route
import { router as userRouter } from './routes/users.js';
import { router as noteRoute} from './routes/notes.js'

const app = express();
app.use(express.json())
app.use(cors())

//load the db uri from envirement variable
const dbUri = process.env.MONGODB_URI

//create a DB connection with MongoDB
mongoose.connect(dbUri)



app.listen(3001, ()=> {
    console.log("port 3001 connected")
})

//navigate user route
app.use('/',userRouter);

//navigate note route
app.use('/',noteRoute)