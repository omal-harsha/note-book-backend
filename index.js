import express from "express";
import mongoose from "mongoose";


const app = express();

mongoose.connect("mongodb+srv://omalharshanuwan:omalmongo@notebook.ljcyzte.mongodb.net/notebook?retryWrites=true&w=majority")

app.listen(3001, ()=> {
    console.log("port 3001 connected")
})