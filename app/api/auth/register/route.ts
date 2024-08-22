import bcrypt from "bcryptjs";
import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";
import dbConncet from "@/lib/dbConnect";
import UserModel from "@/lib/Models/userModel";
export async function POST(request: NextRequest) {
  const { name, email, password } = await request.json();
  await dbConncet();
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();

    return Response.json(
      {
        message: "user  has been created",
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
