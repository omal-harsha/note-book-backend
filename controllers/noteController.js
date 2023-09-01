import { NoteModel } from "../models/Notes.js";
import  ObjectId from "mongoose";

//create note
export const createNote = async (req,res) => {

    const note = new NoteModel(req.body);

    try {
        const response = await note.save()
        res.json({response, success: "true"})
    } catch (error) {
        res.json(error)
    }

}

//get all notes for a specific user
export const getNote =  async (req,res) => {
    try {
        const {user} = req.body
        console.log(user)
        if(!user){
            return res.status(400).json({error: 'user ID is required'})
        }
        const notes = await NoteModel.find({owner: user});
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}

//get single note
export const getSingleNote =  async (req,res) => {
    try {
        const {noteId} = req.body
        console.log(noteId)
        if(!noteId){
            return res.status(400).json({error: 'user ID is required'})
        }
        const notes = await NoteModel.findById(noteId);
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
    

}

//delete the note
export const deleteNote = async (req,res) => {
    try {
        const {id} = req.params
        console.log("recive id " + id)
        const result = await NoteModel.findByIdAndDelete(id)
        res.status(200).json({message: "deleted success"})
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
    
}

//update the note
export const updateNote = async (req,res) => {
    const {noteID} = req.body
    console.log("update recive id " + noteID)
     const note = req.body
    const option = {new: true}
    const updatedNote = await NoteModel.findByIdAndUpdate(noteID,note,option)

    res.json(updatedNote)
    //res.json({note, noteID})
}


export default {createNote,getNote,deleteNote,updateNote,getSingleNote};