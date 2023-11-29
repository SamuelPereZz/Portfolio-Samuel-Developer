import styled from "@emotion/styled";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { ImMail4 } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import logo from "../assets/Logo2.svg";
import { NavLink } from "react-router-dom";
import { typography } from "../Styles";
import { FaCodeBranch } from "react-icons/fa";

const Container = styled.div`
  color: #edededb8;
  min-height: 20vh;
  background-color: #0e1425;
  display: flex;
  gap: 60px;
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
  gap: 20px;
  font-style: italic;
  @media (max-width: 900px) {
    gap: 15px;
    justify-items: center;
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  @media (max-width: 500px) {
    gap: 8px;
  }
`;

const SocialIcon = styled.div`
  font-size: 27px;
  transition: color 0.3s;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    color: ${(props) => props.hoverColor || "#ffffff"};
    transform: scale(1.3);
    filter: drop-shadow(-2px 4px 8px #f8f8f86d);
  }
  @media (max-width: 400px) {
    font-size: 23px;
  }
`;

const Logo = styled.img`
  filter: drop-shadow(4px 4px 8px #ffffff6d);
  width: 100px;
  height: 70px;
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.2);
    filter: drop-shadow(4px 4px 8px #6296fd6c);
  }
`;

const LinkNav = styled(NavLink)`
  filter: drop-shadow(4px 4px 8px #364153a1);
  text-decoration: none;
  color: inherit;
  :hover {
    filter: drop-shadow(4px 4px 8px #777f8b9f);
  }
`;

const RepoPorta = styled.p`
  ${typography.text.body1}
  transition: transform 0.3s ease;
  &:hover,
  &:focus {
    transform: scale(1.1);
    color: white;
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
          <LinkNav
            to={
              "https://www.linkedin.com/in/fernando-samuel-p%C3%A9rez-951812285/"
            }
          >
            <SocialIcon as={FaLinkedin} hoverColor="#0A66C2" />
          </LinkNav>
          <LinkNav to={"https://github.com/SamuelPereZz"}>
            <SocialIcon as={FaSquareGithub} hoverColor="#171515" />
          </LinkNav>
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
        <SocialIcons style={{ flexDirection: "row" }}>
          <SocialIcon as={FaCodeBranch} hoverColor="#197b12" />
          <LinkNav
            to={"https://github.com/SamuelPereZz/Portfolio-Samuel-Developer"}
          >
            <RepoPorta>See repository on github</RepoPorta>
          </LinkNav>
        </SocialIcons>
      </SocialContain>
    </Container>
  );
}

export default Footer;