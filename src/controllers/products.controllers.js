import Product from "../models/product.model.js";
import upLoadImage from "../libs/claudinary.js";
import fs from "fs-extra";

// función para crear un producto
export const createProduct = async (req, res) => {
  const { title, house, categories, description, composition, typeProduct } =
    req.body;

  try {
    // Verificando si el producto ya existe
    const productFound = await Product.findOne({ title: title });
    if (productFound) {
      // Eliminar el archivo temporal después de subir la imagen
      await fs.unlink(req.files.referenceImage.tempFilePath);
      return res.status(400).json(["El producto ya existe"]);
    }

    // Nuevo prodcuto
    const newProduct = new Product({
      title,
      house,
      categories,
      description,
      composition,
      typeProduct,
    });
    console.log(req.files.referenceImage);
    if (req.files.referenceImage) {
      const result = await upLoadImage(
        req.files.referenceImage.tempFilePath,
        "productImages"
      );
      newProduct.referenceImage = {
        publicId: result.public_id,
        secureUrl: result.secure_url,
      };

      // Eliminar el archivo temporal después de subir la imagen
      await fs.unlink(req.files.referenceImage.tempFilePath);
    }

    //saved the Product create
    const productSaved = await newProduct.save();
    res.json({
      id: productSaved._id,
      title: productSaved.title,
      house: productSaved.house,
      categories: productSaved.categories,
      description: productSaved.description,
      composition: productSaved.composition,
      typeProduct: productSaved.typeProduct,

      createAt: productSaved.createdAt,
      updateAt: productSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

// Este función elimina un producto dado su id
export const deleteProcut = async (req, res) => {
  const { _id } = req.body;

  try {
    const productDelete = await Product.findByIdAndDelete({ _id: _id });
    if (productDelete) {
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
  const { _id } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(_id, req.body, {
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

    // Devolver los productos encontrados
    return res.json(products);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Erorror al encontrar productos" });
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
