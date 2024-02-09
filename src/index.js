
import dotenv from "dotenv"
import connectDB from "./db/index.js";

connectDB()

dotenv.config({
    path:'./env'
})


/*
import { Express } from "express";
const app = express()

;( async ()=>{
  try{
        await mongoose.connect(`${process.env.
        MONGOBG_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
               throw error
        })

          app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port $
            {process.env.PORT}`);
          })

    } catch (error){
   console.log("ERROR: ", error)
     throw err
    }
})()

*/