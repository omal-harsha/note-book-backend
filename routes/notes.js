import express from "express";
const router = express.Router()
import jwt  from 'jsonwebtoken';
import {createNote,getNote,deleteNote,updateNote,getSingleNote} from '../controllers/noteController.js'


//middleware to verify the token in cookies
const verifyJWT = (req,res,next) => {
    const token = req.headers['token']
    console.log("this token " + token)
    console.log(token)
    if(!token){
        res.json({message : "Unauthorised"})
    }else{
        jwt.verify(token, "secret", (err) => {
            if(err){
                res.json({auth: false, message: "invalid token"})
            }else{
                next()
            }
        })
    }
    
}

//load the note controller
router.post('/createnote',verifyJWT, createNote)
router.post('/getnotes',verifyJWT, getNote)
router.delete('/deletenote/:id',verifyJWT, deleteNote)
router.patch('/updatenote', updateNote)
router.post('/singlenote', getSingleNote)

export {router};