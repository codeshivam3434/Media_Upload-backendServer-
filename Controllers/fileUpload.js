const File = require("../Models/File");


// localfileupload -> handler function
exports.localFileUpload = async (req, res) => {
    try {
        // fetch file
        const file = req.files.file;
        console.log("File aa gayi -->", file);
        
        // Define the path for storing the file
        let path = __dirname + "/files/" + Date.now()+`.${file.name.split('.').pop()}`; // Added a missing slash after 'files'
        
        Media_Body=File.create(file,path)
        console.log(Media_Body)
        // Move the file to the specified path 
        file.mv(path, (err) => {
            if (err) {
                console.error(err); // Log the error if occurred during file moving
                throw err; // Throw the error for error handling
            }
        });

        // Send response indicating success .${file.name.split('.'[1]
        res.json({
            success: true,
            message: "Local File Uploaded Successfully",
        });

    } catch (error) {
        console.error(error); // Log the error if any occurred
        res.status(500).json({ // Send a proper error response
            success: false,
            message: "Internal Server Error"
        });
    }
}
