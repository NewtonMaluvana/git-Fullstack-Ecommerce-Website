import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    catergory: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true, default: "" },
    isFeatured: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export type Product = {
  _id?: string;
  id: string;
  name: string;
  image: string;
  price: number;
  brand: string;
  description: string;
  catergory: string;
  rating: number;
  isFeatured: boolean;
  numReviews: number;
  countInStock: number;
  colors?: [];
  sizes?: [];
};
export default productModel;
