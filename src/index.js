import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env"
})





connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(` Server is Running at PORT: ${process.env.PORT}`);
            app.on("error", (error) => {
                console.log("Error: ", error)
                throw error
            })
        })
    })
    .catch((error) => {
        console.log("MongoDB Connection Faild: ", error);
    })















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