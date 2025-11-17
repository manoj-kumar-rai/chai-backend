import dotenv from "dotenv";
import connectDB from "./db/db.js";
// import express from "express";

// const app = express();


dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(app.listen.PORT || 8000, () => {
        console.log(` ⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB connection failes !!! ", err);    
})


// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })
















/*
import express from "express";
const app = express();

//This function is async await as connecting with data base and it may take some time
//then we are using try & catch as to manage if there is any error
;( async () => {
    try {
        //mongoose.connect is the syntax with link and data base name for building a 
        // connection
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       //From here onwards I am connecting through express application 
       //If due to any situation we are unable to connect with data base then show error
       app.on("Error", (error) => {
        console.log("The Error is: ", error)
        //If due to any situation we are unable to connect with data base then throw error
        throw error
       })
       //Server started and listning for request
       app.listen(process.env.PORT, () => {
        console.log(`Application is running on port ${process.env.PORT}`);        
       })
    } catch (error) {
        console.error("ERROR: ", error);      
        throw error
    }
})()
*/


