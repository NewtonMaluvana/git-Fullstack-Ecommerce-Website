import { auth } from "@/lib/auth";
import dbConncet from "@/lib/dbConnect";
import OrderModel, { OderItem } from "@/lib/Models/CartModel";
import productModel from "@/lib/Models/ProductModel";
import Round from "@/lib/utils/Round";
const calcPrice = (items: OderItem[]) => {
  const itemsPrice = Round(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = Round(itemsPrice > 600 ? 0 : 250),
    taxPrice = Round(Number(itemsPrice * 0.15)),
    totalPrice = Round(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};

export const POST = auth(async (req: any) => {
  if (!req.auth) {
    return Response.json(
      {
        message: "unauthorized user",
      },
      {
        status: 401,
      }
    );
  }
  const { user } = req.auth;

  try {
    const payload = await req.json();
    await dbConncet();
    const dbProductPrices = await productModel.find(
      {
        _id: { $in: payload.items.map((x: { _id: string }) => x._id) },
      },
      "price"
    );

    const dbOrderItems = payload.items.map((x: { _id: string }) => ({
      ...x,
      product: x._id,
      price: dbProductPrices.find((x) => x._id === x._id).price,
      _id: undefined,
    }));

    const { itemsPrice, taxPrice, shippingPrice, totalPrice } =
      calcPrice(dbOrderItems);

    const newOrder = new OrderModel({
      items: dbOrderItems,
      itemsPrice,
      shippingPrice,
      taxPrice,
      totalPrice,
      shippingAddress: payload.shippingAddress,
      paymentmethod: payload.paymentmethod,
      user: user._id,
    });

    const createOrder = await newOrder.save();
    return Response.json(
      {
        message: "Order created",
        Order: createOrder,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    return Response.json({ message: error.message }, { status: 500 });
  }
});
