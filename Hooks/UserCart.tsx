import { create } from "zustand";
import Round from "@/lib/utils/Round";
import { OderItem, ShippingAddress } from "@/lib/Models/CartModel";
import { persist } from "zustand/middleware";
import { strict } from "assert";

type Cart = {
  items: OderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  paymentMethod: string;
  Shipaddress: ShippingAddress;
};
const initialState: Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
  paymentMethod: "PayPal",
  Shipaddress: {
    fullName: "",
    address: "",
    city: "",
    country: "",
    postalCode: 0,
  },
};

export const cartStore = create<Cart>()(
  persist(() => initialState, {
    name: "Cart",
  })
);

export default function CartService() {
  const {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    Shipaddress,
  } = cartStore();

  return {
    items,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentMethod,
    Shipaddress,
    increase: (item: OderItem) => {
      const ExistItem = items.find((e) => e.id === item.id);

      const updatedItems = ExistItem
        ? items.map((x) =>
            x.id === item.id ? { ...ExistItem, qty: ExistItem.qty + 1 } : x
          )
        : [...items, { ...item, qty: 1 }];
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedItems);
      cartStore.setState({
        items: updatedItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
    getShippingAddress: (Shipaddress: ShippingAddress) => {
      cartStore.setState({
        Shipaddress,
      });
    },
    getPaymentMethod: (paymentMethod: string) => {
      cartStore.setState({
        paymentMethod,
      });
    },
    decrease: (item: OderItem) => {
      const ExistItem = items.find((e) => e.id === item.id);
      if (!ExistItem) return;
      const updatedItems =
        ExistItem.qty === 1
          ? items.filter((x) => x.id !== item.id)
          : items.map((x) =>
              x.id === item.id ? { ...ExistItem, qty: ExistItem.qty - 1 } : x
            );

      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedItems);
      cartStore.setState({
        items: updatedItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
    clear: () => {
      cartStore.setState({
        items: [],
      });
    },

    del: (item: OderItem) => {
      const ExistItem = items.find((e) => e.id === item.id);

      const updatedItems = ExistItem
        ? items.filter((x) => x.id != item.id)
        : items;
      const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
        calcPrice(updatedItems);
      cartStore.setState({
        items: updatedItems,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      });
    },
  };
}

const calcPrice = (items: OderItem[]) => {
  const itemsPrice = Round(
      items.reduce((acc, item) => acc + item.price * item.qty, 0)
    ),
    shippingPrice = Round(itemsPrice > 600 ? 0 : 250),
    taxPrice = Round(Number(itemsPrice * 0.15)),
    totalPrice = Round(itemsPrice + shippingPrice + taxPrice);
  return { itemsPrice, shippingPrice, taxPrice, totalPrice };
};
