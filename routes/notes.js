import express from "express";
const router = express.Router()
import {createNote,getNote,deleteNote,updateNote} from '../controllers/noteController.js'

//load the note controller
router.post('/createnote', createNote)
router.get('/getnotes', getNote)
router.delete('/deletenote', deleteNote)
router.patch('/updatenote', updateNote)

export {router};