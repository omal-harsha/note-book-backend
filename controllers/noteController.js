import { NoteModel } from "../models/Notes.js";

export const createNote = async (req,res) => {

    const note = new NoteModel(req.body);

    try {
        const response = await note.save()
        res.json(response)
    } catch (error) {
        res.json(error)
    }

}

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

export default {createNote,getNote};