// const cloudinary = require("cloudinary")
// const fs = require('fs');
// exports.uploadCloudinary = async function uploadToCloudinary(mainFolderName,locaFilePath) {
//     // locaFilePath :
//     // path of image which was just uploaded to "uploads" folder
//     // var mainFolderName = "main"
//     var filePathOnCloudinary = mainFolderName + "/" + locaFilePath
//     // filePathOnCloudinary :
//     // path of image we want when it is uploded to cloudinary
//     return cloudinary.uploader.upload(locaFilePath,{"public_id":filePathOnCloudinary})
//     .then((result) => {
//       // Image has been successfully uploaded on cloudinary
//       // So we dont need local image file anymore
//       // Remove file from local uploads folder 
//       fs.unlinkSync(locaFilePath)
      
//       return {
//         message: "Success",
//         url:result.url
//       };
//     }).catch((error) => {
//       // Remove file from local uploads folder 
//       fs.unlinkSync(locaFilePath)
//       return {message: "Fail",
//        error:error.message 
//     };
//     });
//   }

const cloudinary = require("cloudinary");
const fs = require('fs');

exports.uploadCloudinary = async function uploadToCloudinary(mainFolderName, locaFilePath) {
    try {
        var filePathOnCloudinary = mainFolderName + "/" + locaFilePath;

        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(locaFilePath, {
            public_id: filePathOnCloudinary
        });

        // Remove file from local uploads folder 
        fs.unlinkSync(locaFilePath);

        return {
            message: "Success",
            url: result.url
        };
    } catch (error) {
        // Remove file from local uploads folder 
        fs.unlinkSync(locaFilePath);

        return {
            message: "Fail",
            error: error.message
        };
    }
};
