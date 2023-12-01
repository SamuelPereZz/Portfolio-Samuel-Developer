import styled from "@emotion/styled";
import { Button1, Button3 } from "./Button";
import { NavLink } from "react-router-dom";
import { typography } from "../Styles";
import { FaPeopleArrows } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { HiArrowSmallDown } from "react-icons/hi2";

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
  @media (max-width: 500px) {
    min-height: auto;
  }
`;

const Message = styled.div`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ContactText = styled.p`
  ${typography.head.head4}
  color: #0e1425;
  text-align: center;
  font-weight: 600;
  @media (max-width: 1100px) {
    ${typography.head.head5}
  }
  @media (max-width: 500px) {
    ${typography.head.head6}
  }
`;

function ContactMessage() {
  return (
    <Container>
      <Message>
        <ContactText>Interested in working together?</ContactText>
        <NavigationLink to={"/Contact-me"}>
          <Button3 style={{ width: 140, height: 50 }}>
            Get in touch!
            <FaPeopleArrows style={{ fontSize: "22px", color: "#364153" }} />
          </Button3>
        </NavigationLink>
        <CvText>Know my experience</CvText>
        <HiArrowSmallDown style={{ fontSize: "55px", color: "#0e1425" }} />
        <NavigationLink
          to={
            "https://drive.google.com/file/d/1w1mWyHSIuG3yAPYayBa1USb-U4_OS_4c/view?usp=sharing"
          }
          target="_blank"
        >
          <Button1 style={{ width: 140, height: 50 }}>
            {" "}
            <CgFileDocument style={{ color: "#f6f8fa", fontSize: "25px" }} />
            CV
          </Button1>
        </NavigationLink>
      </Message>
    </Container>
  );
}

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const CvText = styled.p`
  ${typography.head.head4}
  color: #ededed;
  text-align: center;
  @media (max-width: 1100px) {
    ${typography.head.head5}
  }
  @media (max-width: 500px) {
    ${typography.head.head6}
  }
`;
export default ContactMessage;
