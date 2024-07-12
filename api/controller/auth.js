import bcryptjs from 'bcryptjs'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

export const Signup = async(req,res,next) => {

    try{

        const{username,email,password} = req.body 
      
       
      
        const hashpassword = bcryptjs.hashSync(password,10)
      
      
        const NewUser = new User({username,email,password:hashpassword})
        
         await NewUser.save()
        res.status(200).json({message:"new User have been Saved"})
        
        
          }
          catch(error){
           next(error)
          }
       }  


     
     
     
     
     
       export const SignIn = async(req,res,next) => {


        try{

            const{email,password} = req.body 
           
       
          
        
          const validUser = await User.findOne({email})
          
          if(!validUser){
          return next(errorHandler(404,"User not found"))
          }
       
          const validPassword = bcryptjs.compareSync(password,validUser.password)
           
          if(!validPassword){
          return  next(errorHandler(400,"password invalid"))
          }
         
        
       const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET,)
         
         const{password:pass, ...rest} = validUser._doc
        
         res.status(200).cookie("access_token",token,{httpOnly:true,sameSite: "strict"}).json(rest)
       
       
       }
        catch(error){
         next(error)
        }
       }  



    //update user 
    
    export const updateUser = async (req,res,next) => {


      try{


      const update = await User.findByIdAndUpdate(req.params.userId,{$set:{username:req.body.username,email:req.body.email,
        profilepic:req.body. profilepic},},{new:true})
     
        res.status(200).json(update)
     
      }
      catch(error){
        next(error)
      }
    }
      