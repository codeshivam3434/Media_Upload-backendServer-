//app create krna hai
const express=require("express");
const app=express();
const dotenv=require("dotenv");

//PORT find krna hai
dotenv.config();

const PORT=process.env.PORT||3000;


//middleware
app.use(express.json())
const fileupload=require("express-fileupload");
app.use(fileupload());
//
const db=require("./Config/database");
db.connect();

//cloud se connect kr
const cloudinary=require("./Config/cloudinary");
cloudinary.cloudinaryConnect();
//mount the app
const Upload=require("./Routes/FileUpload");
app.use('/api/v1/upload',Upload);

//activate Server
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`);
})

