import styled from "@emotion/styled";
import Navbar from "./Navbar";
import { colors, typography } from "../Styles";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  filter: drop-shadow(4px 6px 4px #030303);
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  background-color: #364153;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  box-shadow: ${colors.shadow["short"]};
  z-index: 100;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: space-between;
    padding: 5px 2rem;
  }
`;

const LinkNav = styled(NavLink)`
  filter: drop-shadow(4px 4px 8px #364153a1);
  :hover {
    filter: drop-shadow(4px 4px 8px #777f8b9f);
  }
  h1 {
    ${typography.head.head3}
  }
`;

const Logo = styled.img`
  filter: drop-shadow(4px 4px 8px #999999);
  width: 90px;
  height: 90px;
  transition: all 0.8s;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 450px) {
    max-width: 80px;
    max-height: 80px;
  }
`;

function Header() {
  return (
    <>
      <Wrapper>
        <LinkNav to={"/"}>
          <Logo src={logo} alt="Logo" />
        </LinkNav>
        <Navbar />
      </Wrapper>
    </>
  );
}
export default Header;
