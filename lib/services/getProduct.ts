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
const getCategory = cache(async (cat: string) => {
  await dbConncet();
  const products = await productModel.find({ catergory: cat }).lean();
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
  getCategory,
  getProduct,
};

export default productService;
