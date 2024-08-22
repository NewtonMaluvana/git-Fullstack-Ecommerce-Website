import Container from "../Components/Container";
import FomrWrap from "../Components/FomrWrap";
import Login from "./Login";

const page = async () => {
  return (
    <Container>
      <FomrWrap>
        <Login />
      </FomrWrap>
    </Container>
  );
};
export default page;
