// command to install cloudinary  'npm i cloudinary'
// upload  code cloudinary.v2.uploader.upload("/home/my_image.jpg",{upload_preset:"my"})
const cloudinary=require("cloudinary").v2;

exports.cloudinaryConnect=()=>{
    try {
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        })
    } catch (error) {
        console.log("Error",error)
        con
    }
}