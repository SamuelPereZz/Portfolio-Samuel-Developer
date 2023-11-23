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
import { useState } from "react";
import { Button1 } from "./Button";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 240px;
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
    padding-bottom: 40px;
    height: 255px;
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
  padding: 0 1rem;
  @media (max-width: 1100px) {
    ${typography.text.body2}
  }
  @media (max-width: 500px) {
    ${typography.overline.overline2}
  }
`;

function TechnicalSkills() {
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [cardStates, setCardStates] = useState({
    html: false,
    bootstrap: false,
    react: false,
    rails: false,
    sql: false,
    git: false,
    vuejs: false,
    more: false,
  });

  const handleButtonClick = () => {
    setShowFrameworks(!showFrameworks);

    setCardStates({
      html: false,
      bootstrap: false,
      react: false,
      rails: false,
      sql: false,
      git: false,
      vuejs: false,
      more: false,
    });
  };

  const handleCardClick = (cardName) => {
    setCardStates((prevStates) => ({
      ...prevStates,
      [cardName]: !prevStates[cardName],
    }));
  };

  const renderCardContent = (cardName) => {
    const contentMap = {
      html: {
        title: "HTML",
        description: cardStates.html
          ? "I have two years of experience using HTML and CSS together to create visually appealing and interactive web pages and applications."
          : showFrameworks
          ? "I have two years of experience using HTML and CSS together to create visually appealing and interactive web pages and applications."
          : "",
        image: html,
      },
      bootstrap: {
        title: cardStates.bootstrap
          ? "Bootstrap"
          : showFrameworks
          ? "Bootstrap"
          : "CSS",
        description: cardStates.bootstrap
          ? "I use Bootstrap to ensure consistent and polished designs in my projects."
          : showFrameworks
          ? "I use Bootstrap to ensure consistent and polished designs in my projects."
          : "",
        image: cardStates.bootstrap
          ? bootstrap
          : showFrameworks
          ? bootstrap
          : css,
      },
      react: {
        title: cardStates.react
          ? "React"
          : showFrameworks
          ? "React"
          : "JavaScript",
        description: cardStates.react
          ? "I have completed more than six projects in React, incorporating various libraries to enhance functionality and user experience."
          : showFrameworks
          ? "I have completed more than six projects in React, incorporating various libraries to enhance functionality and user experience."
          : "",
        image: cardStates.react ? react : showFrameworks ? react : js,
      },
      rails: {
        title: cardStates.rails
          ? "Ruby on Rails"
          : showFrameworks
          ? "Ruby on Rails"
          : "Ruby",
        description: cardStates.rails
          ? "With three projects and implementing a variety of gems, I have experience in the backend branch."
          : showFrameworks
          ? "With three projects and implementing a variety of gems, I have experience in the backend branch."
          : "",
        image: cardStates.rails ? rails : showFrameworks ? rails : ruby,
      },
      sql: {
        title: cardStates.sql ? "SQL" : showFrameworks ? "SQL" : "Postgresql",
        description: cardStates.sql
          ? "Experience in database creation and management."
          : showFrameworks
          ? "Experience in database creation and management."
          : "",
        image: cardStates.sql ? sql : showFrameworks ? sql : postgresql,
      },
      git: {
        title: cardStates.git ? "Github" : showFrameworks ? "Github" : "Git",
        description: cardStates.git
          ? "Using git in terminal I can easily have a good handle on work reflected in my Github profile."
          : showFrameworks
          ? "Using git in terminal I can easily have a good handle on work reflected in my Github profile."
          : "",
        image: cardStates.git ? github : showFrameworks ? github : git,
      },
      vuejs: {
        title: cardStates.vuejs
          ? "Vuejs"
          : showFrameworks
          ? "Vuejs"
          : "Typescript",
        description: cardStates.vuejs
          ? "With three months of learning I can trust that I will continue good academic and professional growth."
          : showFrameworks
          ? "With three months of learning I can trust that I will continue good academic and professional growth."
          : "",
        image: cardStates.vuejs ? vuejs : showFrameworks ? vuejs : typescript,
      },
      more: {
        title: "...",
        description: cardStates.more
          ? "I am continuously exploring and learning new technologies. Stay tuned for more updates!"
          : showFrameworks
          ? "I am continuously exploring and learning new technologies. Stay tuned for more updates!"
          : "",
        image: moremore,
      },
    };

    const { title, description, image } = contentMap[cardName];
    return { title, description, image };
  };

  return (
    <SectionThree>
      <Button1 onClick={handleButtonClick}>
        {showFrameworks
          ? "See Programming languages.."
          : "See Frameworks and Libraries..."}
      </Button1>

      <SkillsContainer id="cards-container">
        {Object.keys(cardStates).map((cardName) => (
          <CardSkill
            key={cardName}
            className={showFrameworks ? "hovered" : ""}
            onClick={() => handleCardClick(cardName)}
          >
            <ImgSkill src={renderCardContent(cardName).image} alt="Logo" />
            <TitleSkill>{renderCardContent(cardName).title}</TitleSkill>
            <InfoText>{renderCardContent(cardName).description}</InfoText>
          </CardSkill>
        ))}
      </SkillsContainer>
    </SectionThree>
  );
}

export default TechnicalSkills;
