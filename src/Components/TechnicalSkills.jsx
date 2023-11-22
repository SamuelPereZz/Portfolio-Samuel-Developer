import styled from "@emotion/styled";
import html from "../assets/Skills/html.svg";
import css from "../assets/Skills/css.svg";
import git from "../assets/Skills/git.svg";
import github from "../assets/Skills/github.svg";
import js from "../assets/Skills/js.svg";
import postgresql from "../assets/Skills/postgresql.svg";
import rails from "../assets/Skills/rails.svg";
import react from "../assets/Skills/react.svg";
import ruby from "../assets/Skills/ruby.svg";
import sql from "../assets/Skills/sql.svg";
import typescript from "../assets/Skills/typescript.svg";
import vuejs from "../assets/Skills/vuejs.svg";
import bootstrap from "../assets/Skills/bootstrap.svg";
import moremore from "../assets/Skills/more.svg";
import { colors, typography } from "../Styles";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { useInView } from "react-intersection-observer";

const bounceInBck = keyframes`
    0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;
const SectionThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 48px 65px;
  margin: 0 auto;

`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 42px;
  align-items: center;
  @media (max-width: 1100px) {
    ${typography.subtitle.subtitle2}
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardSkill = styled.div`
  animation: ${({ isVisible }) => (isVisible ? bounceInBck : "none")} 2s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${colors.shadow["large"]};
  padding-bottom: 0;
  justify-content: space-around;
  cursor: pointer;
  padding: 1rem 0;
  filter: drop-shadow(4px 4px 8px #364153a1);
  
  &.hovered {
    padding: 0 1rem;
    padding-bottom: 40px;
    height: 240px;
  }
  span {
    text-transform: lowercase;
    color: #3d7ca1;
    :hover {
      color: #8a8fa3;
      @media (max-width: 900px) {
        ${typography.overline.overline2}
      }
    }
  }
  @media (max-width: 900px) {
    justify-content: space-around;
  }
  @media (max-width: 500px) {
    width: 170px;
    text-align: center;
  }
`;

const ImgSkill = styled.img`
  height: 100px;
  @media (max-width: 900px) {
    max-width: 100px;
    max-height: 80px;
  }
`;

const TitleSkill = styled.p`
  ${typography.head.head5}
  font-weight: 600;
  @media (max-width: 900px) {
    ${typography.head.head6}
  }
`;

const InfoText = styled.p`
  margin: 5px 0;
  text-align: center;
  text-shadow: 5px;
  ${typography.text.body2}
  @media (max-width: 900px) {
    ${typography.overline.overline2}
  }
`;

function TechnicalSkills() {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleHover = () => {
      setIsHovered(!isHovered);
    };

    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.addEventListener("mouseenter", handleHover);
    cardsContainer.addEventListener("mouseleave", handleHover);

    return () => {
      cardsContainer.removeEventListener("mouseenter", handleHover);
      cardsContainer.removeEventListener("mouseleave", handleHover);
    };
  }, [isHovered]);

  return (
    <SectionThree>
      <h2>
        {isHovered ? "Frameworks and Libraries" : "Programming Languages"}
      </h2>
      <SkillsContainer id="cards-container">
        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={html} alt="Logo" />
          <TitleSkill>HTML</TitleSkill>
          <InfoText>
            {isHovered
              ? "Two years using html and css together to create web pages and applications."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? bootstrap : css} alt="Logo" />
          <TitleSkill>{isHovered ? "Bootstrap" : "CSS"}</TitleSkill>
          <InfoText>
            {isHovered
              ? "Using Bootstrap to guarantee better views and leaving a mark on each visual work.."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? react : js} alt="Logo" />
          <TitleSkill>{isHovered ? "React" : "Javascript"}</TitleSkill>
          <InfoText>
            {isHovered
              ? "More than six projects in react using a variety of libraries."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? rails : ruby} alt="Logo" />
          <TitleSkill>{isHovered ? "Ruby on Rails" : "Ruby"}</TitleSkill>
          <InfoText>
            {isHovered
              ? "With three projects and implementing a variety of gems, I have experience in the backend branch."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? sql : postgresql} alt="Logo" />
          <TitleSkill>{isHovered ? "SQL" : "Postgresql"}</TitleSkill>
          <InfoText>
            {isHovered ? "Experience in database creation and management." : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? github : git} alt="Logo" />
          <TitleSkill>{isHovered ? "Github" : "Git"}</TitleSkill>
          <InfoText>
            {isHovered
              ? "Using git in terminal I can easily have a good handle on work reflected in my Github profile."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={isHovered ? vuejs : typescript} alt="Logo" />
          <TitleSkill>{isHovered ? "Vuejs" : "Typescript"}</TitleSkill>
          <InfoText>
            {isHovered
              ? "With three months of learning I can trust that I will continue good academic and professional growth."
              : ""}
          </InfoText>
          <span>{isHovered ? "read more.." : ""}</span>
        </CardSkill>

        <CardSkill
          className={isHovered ? "hovered" : ""}
          ref={ref}
          isVisible={inView}
        >
          <ImgSkill src={moremore} alt="Logo" />
          <InfoText>
            {isHovered ? "More technologies coming soon..." : "...."}
          </InfoText>
        </CardSkill>
      </SkillsContainer>
    </SectionThree>
  );
}

export default TechnicalSkills;
