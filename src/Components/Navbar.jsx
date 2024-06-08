import styled from "@emotion/styled";
import { colors } from "../Styles";
import { Button1 } from "./Button";
import { FaUserAstronaut, FaBars } from "react-icons/fa6";
import { MdCoPresent } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";

const Wrapper = styled.nav`
  margin: 0;
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 2rem;
    justify-content: space-between;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        font-size: 24px;
      }
      a {
        filter: drop-shadow(4px 4px 8px #000000a0);
        text-decoration: none;
        color: ${colors.gray["solid"]};
        font-size: 14px;
      }
    }
  }

  @media (max-width: 900px) {
    ul {
      width: 100%;
      background-color: #364153a4;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      position: ${(props) => (props.isOpen ? "absolute" : "static")};
      left: ${(props) => (props.isOpen ? "50%" : "auto")};
      transform: ${(props) => (props.isOpen ? "translateX(-50%)" : "none")};
      z-index: 10;
      gap: 1rem;
      padding: 1rem 0px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    li {
      margin-top: 12px;
    }
  }

  @media (max-width: 500px) {
    li {
      margin-top: 0px;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: block;
    font-size: 4rem;
    color: #ededed;
    background-color: transparent;
    border: none;
    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }
  :hover {
    background-color: #8a8fa344;
    border-radius: 6px;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </HamburgerButton>
      <ul>
        <li>
          <NavLink
            to={"/about-me"}
            onClick={() => handleNavigation("/about-me")}
          >
            <Button1 style={{ width: 140 }}>
              {" "}
              <FaUserAstronaut />
              About
            </Button1>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/portafolio"}
            onClick={() => handleNavigation("/portafolio")}
          >
            <Button1 style={{ width: 140 }}>
              {" "}
              <MdCoPresent style={{ color: "#bfbb81" }} />
              Portafolio
            </Button1>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Contact-me"}
            onClick={() => handleNavigation("/Contact-me")}
          >
            <Button1 style={{ width: 140 }}>
              {" "}
              <LuMessagesSquare style={{ color: "#4d9057" }} />
              Contact Me
            </Button1>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={
              "https://docs.google.com/document/d/14j_10ntZ3ezFy6-7GAf01vdwtL_SX7YX/edit?usp=sharing&ouid=111299936214728437038&rtpof=true&sd=true"
            }
            target="_blank"
          >
            <Button1 style={{ width: 140 }}>
              <CgFileDocument style={{ color: "#a0d1ec" }} />
              CV
            </Button1>
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Navbar;
