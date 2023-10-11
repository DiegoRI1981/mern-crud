import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: "drv0jn5b0",
    api_key: "863446434436543",
    api_secret: "3gAm_6USyBzvE_3sU0LBo77LGjg"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "merncrud",
    })

}
export const deleteImage = async id => {
    await cloudinary.uploader.destroy(id)
}