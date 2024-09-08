import PlaceOrderClient from "./PlaceOrderClient";

const page = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <ul className="steps steps-horizontal lg:steps-horizontal">
          <li className="step step-primary ">Address</li>
          <li className="step step-primary">Payment Method</li>
          <li className="step step-primary">Place Order</li>
          <li className="step">Your Order</li>
        </ul>
      </div>
      <PlaceOrderClient />
    </div>
  );
};
export default page;
