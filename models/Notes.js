import mongoose from "mongoose";

//create a notes collection
const NoteSchema =  new mongoose.Schema({
    title: {type: String, required: true},
    note: {type: String, required: true},
    date: {type: String, required: true},
    category: {type: String, required: true},
    owner: {type:mongoose.Schema.Types.ObjectId,ref:"users", required:true}
});

export const NoteModel = mongoose.model("notes", NoteSchema)