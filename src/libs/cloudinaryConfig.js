import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name : "dqgykik8d",
  api_key : "226517267362599",
  api_secret: "xQoi6jPoBps1ccXWjM-0T6J_rcI",
  secure: true, 
});

// Función para subir una imagen a Cloudinary
const uploadImage = async (image, folderName) => {
  try {
    // Subir la imagen a Cloudinary
    const result = await cloudinary.v2
    .uploader.upload(image,  {folder:folderName} );

    // Verificar si la subida fue exitosa
    if (result.secure_url) {
      console.log('Imagen subida con éxito:', result.secure_url);
      return result; // Devolver el resultado de Cloudinary
    } else {
      console.error('Error al subir la imagen a Cloudinary:', result.error.message);
      throw new Error('La subida de la imagen a Cloudinary falló');
    }
  } catch (error) {
    console.error('Error en la función uploadImage:', error);
    throw error; // Re-lanzar el error para manejarlo en otro lugar si es necesario
  }
};

export default uploadImage;

