import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})





connectDB()
















// import express from "express";
// const app = express()

//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MongoDB_URI}/${DB_Name}`)
//             app.on("error", (error) => {
//                 console.log("Error: ".error)
//                 throw error
//             })

//             app.listen(process.env.MongoDB_PORT, () => {
//                 console.log(`App Is Running ${process.env.PORT}`)
//             })

//         } catch (error) {
//             console.error("Error: ", error)
//             throw err
//         }
//     })()