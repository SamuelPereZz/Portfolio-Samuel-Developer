import styled from "@emotion/styled";
import { Button3 } from "./Button";
import { NavLink } from "react-router-dom";
import { typography } from "../Styles";
import { FaPeopleArrows } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  background-color: #8a8fa3;
  display: flex;
  padding: 48px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ededed;
  @media (max-width: 400px) {
    min-height: 40vh;
  }
`;

const Message = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  p {
    color: var(--text, #111827);
    text-align: center;
    font-size: 48px;
    font-weight: 600;
    line-height: 120%;
    @media (max-width: 1100px) {
      ${typography.head.head5}
    }
    @media (max-width: 500px) {
      ${typography.head.head6}
    }
  }
`;
function ContactMessage() {
  return (
    <Container>
      <Message>
        <p>Interested in working together?</p>
        <NavigationLink to={"/Contact-me"}>
          <Button3>
            Get in touch!
            <FaPeopleArrows style={{ fontSize: "22px", color: "#364153" }} />
          </Button3>
        </NavigationLink>
      </Message>
    </Container>
  );
}

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;
export default ContactMessage;
