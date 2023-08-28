import express from "express";
const router = express.Router()
import {login,register} from "../controllers/userController.js"

//load the routes from controller
router.post('/login', login)
router.post('/register', register)

export {router};