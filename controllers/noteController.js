import { NoteModel } from "../models/Notes.js";

//create note
export const createNote = async (req,res) => {

    const note = new NoteModel(req.body);

    try {
        const response = await note.save()
        res.json(response)
    } catch (error) {
        res.json(error)
    }

}

//get all notes for a specific user
export const getNote =  async (req,res) => {
    try {
        const {user} = req.body
        if(!user){
            return res.status(400).json({error: 'user ID is required'})
        }
        const notes = await NoteModel.find({owner: user});
        res.json(notes)
    } catch (error) {
        res.json(error)
    }
}

//delete the note
export const deleteNote = async (req,res) => {
    try {
        const {noteID} = req.body
        const result = await NoteModel.findByIdAndDelete(noteID)
        res.status(200).json({message: "deleted success"})
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
    
}

//update the note
export const updateNote = async (req,res) => {
    const {noteID} = req.body
     const note = req.body
    const option = {new: true}
    const updatedNote = await NoteModel.findByIdAndUpdate(noteID,note,option)

    res.json(updatedNote)
    //res.json({note, noteID})
}

export default {createNote,getNote,deleteNote,updateNote};