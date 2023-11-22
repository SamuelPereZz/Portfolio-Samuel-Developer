import styled from "@emotion/styled";
import { typography } from "../Styles";
import { SiGnometerminal } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { MdOutlineWebAsset } from "react-icons/md";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiCursorClick } from "react-icons/pi";

const Container = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  h1 {
    ${typography.head.head2}
    font-weight: 600;
    filter: drop-shadow(4px 4px 8px #acacac);
    @media (max-width: 500px) {
      ${typography.head.head3}
    }
  }
  @media (max-width: 500px) {
    padding: 2rem;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 42px;
  padding: 25px 64px;
  align-items: center;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 2fr);
    padding: 15px 1rem;
  }
`;

const CardProject = styled.div`
  filter: drop-shadow(4px 4px 8px #364153a1);
  border-radius: 8px;
  background-color: #ededed;
  display: flex;
  width: 480px;
  min-height: 247px;
  height: 300px;
  flex-direction: column;
  gap: 8px;
  color: #0e1425;
  padding: 24px;
  justify-content: space-between;
  @media (max-width: 500px) {
    gap: 1rem;
    width: 380px;
    min-height: 247px;
    height: auto;
  }
  transition: all 0.8s;
  &:hover {
    transform: scale(1.05);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const ProjecTitle = styled.p`
  ${typography.head.head5}
  font-weight: 600;
`;

const ProjectInfo = styled.p`
  ${typography.subtitle.subtitle2}
`;

const ContainerLearning = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Learning = styled.div`
  background-color: #8a8fa3;
  padding: 2px 10px;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  font-size: 12px;
  color: #ededed;
  @media (max-width: 500px) {
    height: auto;
  }
  :hover {
    background-color: #acaeb7;
  }
`;

function Portafolio() {
  return (
    <Container>
      <h1>Portafolio</h1>
      <p>Practice builds mastery</p>
      <ProjectsContainer>
        <CardProject>
          <IconsContainer>
            <SiGnometerminal
              style={{ fontSize: "30px" }}
              title="Project built on Terminal"
            />{" "}
            <DiRuby
              style={{ fontSize: "30px", color: "#b0215d" }}
              title="Project made with Ruby"
            />{" "}
            <FaGithub style={{ fontSize: "30px" }} title="Github" />
          </IconsContainer>
          <ProjecTitle>CLIbia.</ProjecTitle>
          <ProjectInfo>
            A Ruby system that connects to an API to obtain dynamic and random
            questions. Used JSON format to store and manage question, answer,
            and score data, facilitating data persistence and analysis.
          </ProjectInfo>
          <ContainerLearning>
            <Learning>APIs</Learning>
            <Learning>JSON</Learning>
            <Learning>Inheritance</Learning>
            <Learning>FIle Manipulation</Learning>
          </ContainerLearning>
        </CardProject>

        <CardProject>
          <IconsContainer>
            <PiCursorClick
              style={{ fontSize: "30px", color: "#2170b0" }}
              title="Project built on localhost"
            />{" "}
            <BiLogoPostgresql
              style={{ fontSize: "30px", color: "#195c79" }}
              title="using postgresql for database"
            />
            <DiRuby
              style={{ fontSize: "30px", color: "#b0215d" }}
              title="Project using Ruby"
            />{" "}
            <SiRubyonrails
              style={{ fontSize: "40px", color: "#b0215d" }}
              title="Project made with Ruby on Rails"
            />{" "}
            <FaGithub style={{ fontSize: "30px" }} title="Github" />
          </IconsContainer>
          <ProjecTitle>Tweetable.</ProjecTitle>
          <ProjectInfo>
            A Twitter simulation (X) using the `Ruby on Rails` framework for the
            backend and HTML/CSS for the frontend. Successfully replicated all
            key Twitter features, providing users with a similar experience and
            a seamless transition between both platforms.
          </ProjectInfo>
          <ContainerLearning>
            <Learning>ERD</Learning>
            <Learning>MVC</Learning>
            <Learning>Data Base</Learning>
            <Learning>Scaffold</Learning>
            <Learning>CRUD</Learning>
          </ContainerLearning>
        </CardProject>

        <CardProject>
          <IconsContainer>
            <PiCursorClick
              style={{ fontSize: "30px", color: "#2170b0" }}
              title="Project built on localhost"
            />{" "}
            <IoLogoJavascript
              style={{ fontSize: "30px", color: "#ecd44e" }}
              title="Project using javascript"
            />
            <FaReact
              style={{ fontSize: "30px", color: "#195e79" }}
              title="Project made in React"
            />
            <FaGithub style={{ fontSize: "30px" }} title="Github" />
          </IconsContainer>
          <ProjecTitle>Eatable .</ProjecTitle>
          <ProjectInfo>
            I developed an interactive web application in React that connects to
            an external API to display and manage food dish cards. Users can
            create, modify, and delete dishes, as well as view and edit their
            details. This project showcases my ability to create interactive web
            applications with multiple functionalities and handle various
            libraries for a dynamic and functional design.
          </ProjectInfo>
          <ContainerLearning>
            <Learning>API</Learning>
            <Learning>Libraries</Learning>
            <Learning>CRUD</Learning>
            <Learning>Reusable components</Learning>
          </ContainerLearning>
        </CardProject>

        <CardProject>
          <IconsContainer>
            <PiCursorClick
              style={{ fontSize: "30px", color: "#2170b0" }}
              title="Project built on localhost"
            />{" "}
            <BiLogoPostgresql
              style={{ fontSize: "30px", color: "#195c79" }}
              title="using postgresql for database"
            />
            <DiRuby
              style={{ fontSize: "30px", color: "#b0215d" }}
              title="Project using Ruby"
            />{" "}
            <SiRubyonrails
              style={{ fontSize: "40px", color: "#b0215d" }}
              title="Project made with Ruby on Rails"
            />{" "}
            <IoLogoJavascript
              style={{ fontSize: "30px", color: "#ecd44e" }}
              title="Project using javascript"
            />
            <FaReact
              style={{ fontSize: "30px", color: "#195e79" }}
              title="Project made in React"
            />
            <FaGithub style={{ fontSize: "30px" }} title="Github" />
          </IconsContainer>
          <ProjecTitle>Get That Home.</ProjecTitle>
          <ProjectInfo>
            Robust real estate sales app with streamlined property listing
            management, user authentication, and dynamic interfaces featuring
            advanced filters. Built with a powerful Ruby on Rails backend for
            efficient database and API management, complemented by a React
            frontend ensuring a captivating user experience. Simplifies property
            exploration, user authentication, and seamless interaction with
            property details.
          </ProjectInfo>
          <ContainerLearning>
            <Learning>HTTP Requests</Learning>
            <Learning>MC</Learning>
            <Learning>API creation</Learning>
            <Learning>Hosting</Learning>
            <Learning>Libraries</Learning>
            <FaPeopleGroup
              style={{ fontSize: "30px", color: "#33bb3e" }}
              title="Project using javascript"
            />
          </ContainerLearning>
        </CardProject>
      </ProjectsContainer>
    </Container>
  );
}

export default Portafolio;
