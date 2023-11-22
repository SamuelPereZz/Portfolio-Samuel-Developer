import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import logo from "../assets/Logo2.svg";

const Container = styled.div`
  color: #edededb8;
  min-height: 20vh;
  background-color: #0e1425;
  display: flex;
  gap: 60px;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 15px;
    justify-items: center;
    align-items: center;
  }
`;

const SocialContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-style: italic;
  @media (max-width: 900px) {
  flex-direction: column;
    gap: 15px;
    justify-items: center;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

const Logo = styled.img`
  filter: drop-shadow(4px 4px 8px #9999996e);
  width: 100px;
  height: 70px;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.05);
  }
`;

function Footer() {
  return (
    <Container>
      <SocialContain>
        <Logo src={logo} alt="Logo" />
        <p>© 2023 - Samuel Pérez portfolio</p>
      </SocialContain>
      <SocialContain>
        <p>To see more of my work, visit my socials:</p>
        <SocialIcons style={{flexDirection: "row"}}>
          <FaLinkedin style={{ fontSize: "30px" }} />{" "}
          <FaSquareGithub style={{ fontSize: "30px" }} />{" "}
          <ImMail4 style={{ fontSize: "30px" }} />
        </SocialIcons>
        <div>
            <p>fernando.samuelperez01@gmail.com</p>
          </div>
      </SocialContain>
      <SocialContain>
        <p>Source code:</p>
        <SocialIcons>
          <FaReact style={{ fontSize: "30px" }} />
          <p>React</p>
          <IoLogoJavascript style={{ fontSize: "30px" }} />
          <p>Javascript</p>
        </SocialIcons>
      </SocialContain>
    </Container>
  );
}

export default Footer;
