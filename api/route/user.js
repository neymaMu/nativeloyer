import express from 'express' 
import {Signup,SignIn,updateUser} from '../controller/auth.js'

const router = express.Router() 


router.post("/signup",Signup)
router.post("/signin", SignIn)

router.put("/update/:userId",updateUser)




export default router