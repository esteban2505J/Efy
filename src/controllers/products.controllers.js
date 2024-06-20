import Product from "../models/product.model.js";
import fs from "fs-extra";
import uploadImage from "../libs/cloudinaryConfig.js";


// función para crear un producto
export const createProduct = async (req, res) => {

  // Atributos del producto
  const { title, description,categories, typeProduct , price, attributes} =
    req.body;

   try {   
  //   // Verificando si el producto ya existe
    const productFound = await Product.findOne({ title: title });
  //   // verificar si el producto ya existe 
    if (productFound) {
      // Eliminar el archivo temporal después de subir la imagen
      await fs.unlink(req.files.image.tempFilePath);
      return res.status(400).json(["El producto ya existe"]);
    }

    // Verificar si se ha subido un archivo
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: 'No se ha proporcionado ninguna imagen para subir' });
    }

    // Subir imagen a Cloudinary
    const image = req.files.image;
    const pathImage = image.tempFilePath; // Obtener la ruta temporal del archivo
    const folderName = "productsImages"; // Carpeta en Cloudinary donde se guardará la imagen

    // Llamar a la función para subir la imagen a Cloudinary
    const referenceImage = await uploadImage(pathImage, folderName);
  

    // Verificar si la subida fue exitosa
    if (!referenceImage.secure_url) {
      throw new Error('La subida de la imagen a Cloudinary falló');
    }

    console.log('Imagen subida con éxito:', referenceImage.secure_url);
    await fs.unlink(req.files.image.tempFilePath);

    // Nuevo prodcuto
    const newProduct = new Product({
      title,
      description,
      categories,
      typeProduct,
      price,
      referenceImage : {publicId:referenceImage.public_id, secureUrl: referenceImage.secure_url},
      attributes
    });

    //saved the Product create
    const productSaved = await newProduct.save();
    res.json({
      id: productSaved._id,
      title: productSaved.title,
      categories: productSaved.categories,
      description: productSaved.description,
      typeProduct: productSaved.typeProduct,
      price: productSaved.price,
      attributes : productSaved.attributes, 
      createAt: productSaved.createdAt,
      updateAt: productSaved.updatedAt,

      status : "true",
      data : referenceImage
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// Este función elimina un producto dado su id
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productDelete = await Product.findByIdAndDelete(id);
    if (!productDelete) {
      return res.status(400).json({ message: "El producto no se eliminó" });
    }
    return res.json({ message: "se ha eliminado el producto con exito" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Algo salió mal eliminando el producto" });
  }
};

// Esta función actualiza un producto ya existente
export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "product no found" });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "no se pudoa ctualizar el producto" });
  }
};

// función que devuelve todos los productos
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length == 0) {
      res.status(404).json({ message: "No se encontraron productos" });
    }

    // console.log(products);
    // Devolver los productos encontrados
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error al encontrar productos" });
  }
};

// Función que devuelve los productos de cierta categoría
export const getProductsByCategorie = async (req, res) => {
  const { categorie } = req.body;
  try {
    const productsByCategorie = await Product.findOne({
      categories: categorie,
    });
    if (!productsByCategorie || productsByCategorie.length == 0) {
      res.status(404).json({ message: "No se encotnraron productos " });
    }

    return res.json(productsByCategorie);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "algo salió mal " });
  }
};

// Función que devuelve los productos de cierta categoría
export const getProductsByTypeProduct = async (req, res) => {
  const { type } = req.body;
  try {
    const productsByTypeProduct = await Product.findOne({
      typeProduct: type,
    });
    if (!productsByTypeProduct || productsByTypeProduct.length == 0) {
      res.status(404).json({ message: "No se encotnraron productos " });
    }

    return res.json(productsByTypeProduct);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "algo salió mal" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "No se encontró ningún producto con el ID proporcionado.",
      });
    }

    return res.json(product);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Algo salió mal al buscar el producto." });
  }
};
