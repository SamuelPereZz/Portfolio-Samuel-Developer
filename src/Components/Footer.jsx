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
  padding: 20px 15rem;
  justify-content: space-between;
  @media (max-width: 900px) {
    padding: 20px 1rem;
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

const SocialIcon = styled.div`
  font-size: 30px;
  transition: color 0.3s;
  cursor: pointer;
  filter: drop-shadow(-2px 4px 8px #f8f8f86d);

  &:hover {
    color: ${props => props.hoverColor || "#ffffff"};
  }
`;

const Logo = styled.img`
  filter: drop-shadow(4px 4px 8px #ffffff6d);
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
        <SocialIcons style={{ flexDirection: "row" }}>
          <SocialIcon as={FaLinkedin} hoverColor="#0A66C2" />
          <SocialIcon as={FaSquareGithub} hoverColor="#171515" />
          <SocialIcon as={ImMail4} />
        </SocialIcons>
        <div>
          <p>fernando.samuelperez01@gmail.com</p>
        </div>
      </SocialContain>
      <SocialContain>
        <p>Source code:</p>
        <SocialIcons>
        <SocialIcon as={FaReact} hoverColor="#61DAFB" />
          <p>React</p>
          <SocialIcon as={IoLogoJavascript} hoverColor="#F7DF1E" />
          <p>Javascript</p>
        </SocialIcons>
      </SocialContain>
    </Container>
  );
}

export default Footer;
