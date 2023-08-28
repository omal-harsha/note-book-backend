import mongoose from "mongoose";

//create a users collection
const UserSchema =  new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

export const UserModel = mongoose.model("users", UserSchema)