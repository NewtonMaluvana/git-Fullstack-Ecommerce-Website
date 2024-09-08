import Container from "../Components/Container";
import FomrWrap from "../Components/FomrWrap";
import PaymentClient from "./PaymentClient";

const page = () => {
  return (
    <div className="p-2">
      <Container>
        <div className=" flex justify-center items-center">
          {" "}
          <ul className="steps steps-horizontal lg:steps-horizontal">
            <li className="step step-primary ">Address</li>
            <li className="step step-primary">Payment Method</li>
            <li className="step">Place Order</li>
            <li className="step">Your Order</li>
          </ul>
        </div>
        <PaymentClient />
      </Container>
    </div>
  );
};
export default page;
