import { Container } from "@mui/material";
import FomrWrap from "../Components/FomrWrap";
import Register from "./Register";

const page = async () => {
  return (
    <Container>
      <FomrWrap>
        <Register />
      </FomrWrap>
    </Container>
  );
};
export default page;
