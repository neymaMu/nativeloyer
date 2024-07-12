 
 import mongoose from "mongoose"; 

 
 const UserSchema = new mongoose.Schema({
 
     username:{
         type:String,
         required:true,
         unique:true
     },
 
    email:{
     type:String,
     required:true,
     unique:true
    },
 
    profilepic:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/007/786/810/original/lawyer-or-judge-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg"
    },
  
    password:{
     type:String,
     required:true
    },
 
  
},{timestamps:true}) 
 
 const User = mongoose.model("User",UserSchema)
 
 export default User