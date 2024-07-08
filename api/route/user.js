import express from 'express' 
import {Signup,SignIn} from '../controller/auth.js'

const router = express.Router() 


router.post("/signup",Signup)
router.post("/signin", SignIn)




export default router