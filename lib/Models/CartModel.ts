import mongoose from "mongoose";

const oderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
        id: { type: String, required: true },
        name: { type: String, required: true },

        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    ShippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: Number, required: true },
      country: { type: String, required: true },
    },

    paymentMethod: { type: String, required: true },
    paymentResult: { id: String, status: String, email_address: String },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
    isDelivered: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.models.Order || mongoose.model("Order", oderSchema);
export default OrderModel;

export type Order = {
  _id: string;
  user?: { name: string };
  items: [OderItem];
  ShippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: number;
    country: string;
  };

  paymentMethod: string;
  paymentResult?: { id: string; status: string; email_address: string };
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  isPaid?: boolean;
  isDelivered: boolean;
  paidAt?: string;
  deliveredAt?: string;
  createdAt?: string;
};
export type OderItem = {
  id: string;
  name: string;
  qty: number;
  image: string;
  price: number;
  color: string;
  size: string;
};
export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: number;
};
