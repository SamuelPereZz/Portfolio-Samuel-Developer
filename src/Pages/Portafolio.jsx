import styled from "@emotion/styled";
import { typography } from "../Styles";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../projects";

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



function Portafolio() {
  return (
    <Container>
      <h1>Portafolio</h1>
      <p>Practice builds mastery</p>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}

export default Portafolio;
