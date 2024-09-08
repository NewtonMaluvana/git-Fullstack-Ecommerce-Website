"use client";
import OrderDetails from "./OrderDetails";

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="">
      <div className=" flex justify-center items-center">
        <ul className="steps steps-horizontal lg:steps-horizontal">
          <li className="step step-primary ">Address</li>
          <li className="step step-primary">Payment Method</li>
          <li className="step step-primary">Place Order</li>
          <li className="step step-primary">Your Order</li>
        </ul>
      </div>
      <OrderDetails
        paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
        orderId={params.id}
      />
    </div>
  );
}
