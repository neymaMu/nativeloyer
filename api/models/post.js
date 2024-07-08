import mongoose from 'mongoose' 

const postSchema = new mongoose.Schema({



    userId:{
        type:String,
        required:true
    },


    client:{
        type:String,
    },

    type:{
        type:String,  
    },

    aponentname:{
        type:String,  
    },

    caseType:{
        type:String,  
    },

    caseSubject:{
        type:String,  
    },

    casenumber:{
        type:String,
    },
    year:{
        type:String,
    },

    previseSession:{
        type:String,
    },

    court:{
        type:String
    },

    faculity:{
        type:String
    },

    notes:{
        type:String
    },
    
    pdf:{
        type:String
    },

    date:[
    {
        type:String
    }
]
}) 


const Post= mongoose.model("Post",postSchema)
 
export default Post