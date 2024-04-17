import cloudinary from "cloudinary";

const cloud_name = "dapsakqbt";
const api_key = "514432816986328";
const api_secret = "oQ37OcaeSpJj5SIsCVO0a6wi6MA";
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
  secure: true,
});

async function uploadImage(filePath, folder) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: folder,
    });
    return result;
  } catch (error) {
    console.error("Error al subir la imagen a Cloudinary:", error);
    throw error;
  }
}

export default uploadImage;
