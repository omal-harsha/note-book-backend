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
        res.cookie('access_token', token, 
        {
            httpOnly: false, 
            secure: true,   
            sameSite: 'none',
            maxAge: 30 * 60 * 1000
          });
        res.json({token, userID: user._id, username: user.username, success: true})
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
    res.json({message: "User Registred Successfully", success: true});
}

//user availability check
export const userCheck = async (req,res) => {
    const {userID} =  req.body
    
    try {
        const user = await UserModel.findOne({ _id: userID });
    
        if (user) {
          res.json({ exists: true });
        } else {
          res.json({ exists: false });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

export default {login,register,userCheck};