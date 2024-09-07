import Container from "../Components/Container";
import FomrWrap from "../Components/FomrWrap";
import CheckoutClient from "./CheckoutClient";

const page = () => {
  return (
    <div className="p-2 min-h-full">
      <Container>
        <FomrWrap>
          <CheckoutClient />
        </FomrWrap>
      </Container>
    </div>
  );
};
export default page;
