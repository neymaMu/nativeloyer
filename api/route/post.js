 


 import express from 'express' 
import{createpost, userPost,DeletePost,signout,UpdatePost} from '../controller/post.js'
 
 const router = express.Router() 
 
 
 router.post("/create",createpost)
 router.get("/getpost/:userId", userPost)
 router.delete("/dele/:postId",DeletePost)
 router.post("/sign", signout)
 router.put("/update/:postId",UpdatePost)
 
 
 
 
 export default router