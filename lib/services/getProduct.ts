import { cache } from "react";
import dbConncet from "../dbConnect";
import productModel, { Product } from "../Models/ProductModel";

export const validate = 3600;

const getAllProducts = cache(async () => {
  await dbConncet();
  const products = await productModel.find({}).sort({ _id: -1 }).lean();

  return products as Product[];
});
const getFeatured = cache(async () => {
  await dbConncet();
  const products = await productModel.find({ isFeatured: true }).lean();
  return products as Product[];
});
const getIphone = cache(async (name: string) => {
  await dbConncet();
  const products = await productModel
    .find({
      name: name,
    })
    .lean();
  return products as Product[];
});
const getProduct = cache(async (ID: string) => {
  await dbConncet();
  const products = await productModel.findOne({ id: ID }).lean();
  return products as Product[];
});

const productService = {
  getAllProducts,
  getFeatured,
  getIphone,
  getProduct,
};

export default productService;
