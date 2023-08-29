import express from "express";
const router = express.Router()
import jwt  from 'jsonwebtoken';
import {createNote,getNote,deleteNote,updateNote} from '../controllers/noteController.js'


//middleware to verify the token in cookies
const verifyJWT = (req,res,next) => {
    const token = req.cookies.jwt;
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
router.get('/getnotes',verifyJWT, getNote)
router.delete('/deletenote',verifyJWT, deleteNote)
router.patch('/updatenote',verifyJWT, updateNote)

export {router};