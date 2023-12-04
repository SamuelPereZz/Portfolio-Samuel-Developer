import styled from "@emotion/styled";
import { typography } from "../Styles";
import { useInView } from "react-intersection-observer";

const SectionFour = styled.div`
  height: 100vh;
  background-color: #364153;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 3rem 5%;
  align-items: center;
  justify-content: center;
  @media (max-width: 1100px) {
    height: auto;
    padding: 3rem 5%;
    gap: 3rem;
  }
  @media (max-width: 500px) {
    gap: 2rem;
  }
`;

const Flip = styled.div`
  @-webkit-keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
  @keyframes swing-in-top-fwd {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
  ${({ isVisible }) =>
    isVisible &&
    `
    animation: swing-in-top-fwd 1s ease-in-out;
  `}
`;

const SkillsRaw = styled.div`
  color: #ededed;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  gap: 42px;
  align-items: center;
  ${typography.subtitle.subtitle1}
  @media (max-width: 1100px) {
    ${typography.subtitle.subtitle2}
    grid-template-columns: repeat(2, 2fr);
  }
  @media (max-width: 500px) {
    ${typography.text.body2}
    grid-template-columns: repeat(1, 2fr);
    gap: 22px;
  }
`;

const SkillsColumn = styled.div`
  font-style: italic;
  width: 16rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

const Line = styled.div`
  width: 14rem;
  border-bottom: 2px solid #ededed;
`;

const TitleSkill = styled.p`
  ${typography.head.head3}
  color:#ededed;
  font-weight: 600;
  filter: drop-shadow(1px 8px 4px #acacacdf);
`;

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <SectionFour ref={ref}>
      <TitleSkill>Skills</TitleSkill>
      <Flip isVisible={inView}>
        <SkillsRaw>
          <SkillsColumn>
            <h2>Teamwork</h2>
            <Line />
            <p>
              Enthusiastic collaborator with a successful track record of
              working in diverse teams, bringing unique perspectives and
              fostering an inclusive environment to optimize creativity and
              efficiency..
            </p>
          </SkillsColumn>
          <SkillsColumn>
            <h2>Effective Communication</h2>
            <Line />
            <p>
              Experience in leading effective presentations to cross-functional
              teams, simplifying technical concepts to ensure clear
              understanding among all team members.
            </p>
          </SkillsColumn>
          <SkillsColumn>
            <h2>Problem Solving</h2>
            <Line />
            <p>
              Proactive and solution-oriented thinker with the ability to
              address complex problems strategically. Implemented innovative
              solutions that have improved operational efficiency..
            </p>
          </SkillsColumn>
          <SkillsColumn>
            <h2>Empathy</h2>
            <Line />
            <p>
              Proven ability to understand others' perspectives and respond with
              empathy. Created a positive work environment by recognizing and
              addressing the emotional needs of team members.
            </p>
          </SkillsColumn>
        </SkillsRaw>
      </Flip>
    </SectionFour>
  );
}

export default Skills;
