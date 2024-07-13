
import Post from '../models/post.js'

export const createpost = async(req,res,next) => {


    try{

   const{pdf,date,userId,client,type,aponentname,caseType,caseSubject,casenumber,year,previseSession, court,faculity,notes} = req.body


   const newPost = new Post({pdf,date,userId,client,type,aponentname,caseType,caseSubject,casenumber,year,previseSession, court,faculity,notes})
   
   await newPost.save()
   res.status(200).json(newPost)

}
    catch(error){
        next(error)
    }
} 


//get user posts 

export const  userPost  = async(req,res,next) => {

 
   
    try{
   
        const mypost = await Post.find({userId:req.params.userId})
        res.status(200).json(mypost)


    }
    catch(error){
        next(error)
    }
} 


//dete post 


export const DeletePost =async (req,res,next) => {


try{

await Post.findByIdAndDelete(req.params.postId)

res.status(200).json("post deleted")


}
catch(error){
    next(error)
}

} 


export const signout = (req,res,next) =>{

    try{
  
      res.clearCookie('access_token').status(200).json("User is sign out")
    }
    catch(error){
      next(error)
    }
  }  



  export const UpdatePost = async(req,res) =>{

   
    
     try{
    
        const{pdf,date,userId,client,type,aponentname,caseType,caseSubject,casenumber,year,previseSession, court,faculity,notes} = req.body
    
        const updatePost = await Post.findByIdAndUpdate(req.params.postId,{$set:{ pdf,date,userId,client,type,aponentname,caseType,caseSubject,casenumber,year,previseSession, court,faculity,notes}},{new:true})
    
    
        res.status(200).json(updatePost)
    
    }
    
    catch(error){
      next(error)
    }
    }