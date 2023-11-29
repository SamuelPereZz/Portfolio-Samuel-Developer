import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { typography } from "../Styles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
    width: 350px;
    min-height: 247px;
    height: auto;
  }
  transition: all 0.8s;
  &:hover {
    transform: scale(1.05);
  }

  //Icono esquinado
  position: relative;
  .project-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: #5b5b5c99;
    display: flex;
    align-items: center;
    gap: 8px;
    :hover {
      color: #5ca3c6;
    }
  }
  &:hover .project-icon,
  &:focus-within .project-icon {
    opacity: 1;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(6, 2rem);
  }
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
    padding: 2px;
  }
  :hover {
    background-color: #acaeb7;
  }
`;
const StyledIcon = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <CardProject>
      <div className="project-icon">
        visit website <FaArrowUpRightFromSquare style={{ fontSize: "30px" }} />
      </div>
      <IconsContainer>
        {project.icons.map((icon, index) => (
          <StyledIcon key={index}>
            <icon.Icon
              style={{ fontSize: "30px", color: icon.color || null }}
              title={icon.title}
            />
          </StyledIcon>
        ))}
      </IconsContainer>
      <ProjecTitle>{project.title}</ProjecTitle>
      <ProjectInfo>{project.description}</ProjectInfo>
      <ContainerLearning>
        {project.learnings.map((learning, index) => (
          <Learning key={index}>{learning}</Learning>
        ))}
      </ContainerLearning>
    </CardProject>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    learnings: PropTypes.arrayOf(PropTypes.string).isRequired,
    icons: PropTypes.arrayOf(
      PropTypes.shape({
        Icon: PropTypes.elementType.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default ProjectCard;
