import product from "../models/product";

export const newProduct = async (req, res, next) => {
  const new_product = await product.create(req.body);
  res.status(200).json({
    new_product,
  });
};

export const getProducts = async (req, res, next) => {
  const all_products = await product.find({});
  res.status(200).json({ data: all_products });
};
