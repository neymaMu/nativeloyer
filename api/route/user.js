import express from 'express' 
import {Signup,SignIn,updateUser,findUser} from '../controller/auth.js'

const router = express.Router() 


router.post("/signup",Signup)
router.post("/signin", SignIn)

router.put("/update/:userId",updateUser)

router.get("/getuser/:userId",findUser)




export default router