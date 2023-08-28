import express from "express";
const router = express.Router()
import {login,register} from "../controllers/userController.js"

//load the users controller
router.post('/login', login)
router.post('/register', register)

export {router};