import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import session from "express-session";
dotenv.config();
import cookieParser from "cookie-parser";


//import the users route
import { router as userRouter } from './routes/users.js';
import { router as noteRoute} from './routes/notes.js'

const app = express();
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, 
  };

app.use(cors(corsOptions));


app.use(cookieParser());

//load the db uri from envirement variable
const dbUri = process.env.MONGODB_URI

//create a DB connection with MongoDB
mongoose.connect(dbUri)



app.listen(process.env.PORT || 3001, ()=> {
    console.log("port 3001 connected")
})

//navigate user route
app.use('/',userRouter);

//navigate note route
app.use('/',noteRoute)


