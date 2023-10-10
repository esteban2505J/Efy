import { v2 as cloudinary } from "cloudinary";

const cloud_name = "dapsakqbt";
const api_key = "514432816986328";
const api_secret = "oQ37OcaeSpJj5SIsCVO0a6wi6MA";
cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
  secure: true,
});

export async function upLoadImage(filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: "profileImage",
  });
}
