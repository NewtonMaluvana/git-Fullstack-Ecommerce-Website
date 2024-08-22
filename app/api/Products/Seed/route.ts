import data from "@/lib/data";
import dbConncet from "@/lib/dbConnect";
import { request } from "https";
import { NextRequest, NextResponse } from "next/server";
import UserModel from "@/lib/Models/userModel";
import productModel from "@/lib/Models/ProductModel";

export const GET = async (request: NextRequest) => {
  const { users, products } = data;

  await dbConncet();
  await UserModel.deleteMany();
  await UserModel.insertMany(users);

  await productModel.deleteMany();
  await productModel.insertMany(products);

  return NextResponse.json({
    message: "Inserted successfully",
    users,
    products,
  });
};
