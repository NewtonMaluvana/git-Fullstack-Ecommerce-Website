"use client";
import OrderDetails from "./OrderDetails";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <OrderDetails
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
      orderId={params.id}
    />
  );
}
