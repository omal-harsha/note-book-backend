import express from "express";
const router = express.Router()
import {createNote,getNote} from '../controllers/noteController.js'

//load the note controller
router.post('/createnote', createNote)
router.get('/getnotes', getNote)

export {router};