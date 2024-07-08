import express from 'express'   
import mongoose from 'mongoose'
import authrouter from './route/user.js'
import cors from 'cors'
import dotenv from 'dotenv'
import posrroute from './route/post.js'


dotenv.config()

const app = express()
app.use(express.json()) 
app.use(cors())

mongoose.connect(process.env.MONGO)
.then(() => console.log("db connect"))
.catch((error) => console.log(error))


app.listen(4000,()=> {
    console.log("server is runing")
}) 


app.use("/api/user",authrouter)
app.use("/api/post", posrroute)