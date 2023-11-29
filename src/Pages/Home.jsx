import styled from "@emotion/styled";
import Presentacion from "../Components/Presentacion";
import PresentacionProject from "../Components/ProjectPresentation";
import ContactMessage from "../Components/ContactMessage";

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
      <PresentacionProject />
      <ContactMessage/>
    </Container>
  );
}

export default Home;
