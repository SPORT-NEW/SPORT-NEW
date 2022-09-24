const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name:trust-us,
    api_key:636717224412268,
    api_secret:AvwHCkHR34Xv4GqjKBw2oGgnNME
})
uploadToCloudinary = (path, folder) => {
    return cloudinary.v2.uploader.upload(path, {
        folder
    }).then((data) => {
        return { url: data.url, public_id: data.public_id };
    }).catch((error) => {
        console.log(error)
    })
}


