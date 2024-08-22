import Container from "../Components/Container";
import FomrWrap from "../Components/FomrWrap";
import PaymentClient from "./PaymentClient";

const page = () => {
  return (
    <div className="p-2">
      <Container>
        <PaymentClient />
      </Container>
    </div>
  );
};
export default page;
