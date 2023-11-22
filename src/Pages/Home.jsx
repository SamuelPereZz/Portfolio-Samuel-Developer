import styled from "@emotion/styled";
import Presentacion from "../Components/Presentacion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Home() {
  return (
      <Container>
        <Presentacion />
      </Container>
  );
}

export default Home;
