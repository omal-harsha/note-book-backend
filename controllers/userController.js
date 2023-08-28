import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";


// user login funtion
export const login = async (req,res) => {

        const {username, password} = req.body;
        const user = await UserModel.findOne({username})
    
        if(!user){
            return res.json({message: "User Doesn't Exist"})
        }
        
        //check the encrypted the passwrord
        const isPasswordValid = await bcrypt.compare(password, user.password)
    
        if(!isPasswordValid){
            return res.json({message: "Password is incorrect"})
        }
        
        //crate a json web token
        const token = jwt.sign({id: user._id}, "secret")

        //token store to the cookies
        res.cookie('jwt', token, {
            httpOnly: true, 
            secure: true,   
            sameSite: 'strict'
          });
        res.json({token, userID: user._id, username: user.username})
}

// user register function
export const register = async (req,res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username});

    if(user){
        return res.json({message: "user already exists!"})
    }

    //password encrypt
    const hashedPassword =  await bcrypt.hash(password,10);

    const newUser = new UserModel({username, password: hashedPassword})
    await newUser.save();
    res.json({message: "User Registred Successfully"});
}

export default login;