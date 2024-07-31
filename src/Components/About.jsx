import styled from "@emotion/styled";
import { typography } from "../Styles";
import { slideInBlurredLeft } from "./Presentation";
import Photo from "../assets/Photo3.jpg";

const Container = styled.section`
  height: 100vh;
  background-color: #364153;
  padding: 3rem 17.7rem;
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  @media (max-width: 1450px) {
    padding: 3rem 10rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    padding: 3rem 2rem;
    height: auto;
  }
  @media (max-width: 800px) {
    padding: 2rem 0rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const PhotoDiv = styled.div`
  border-radius: 8px;
  width: 300px;
  height: 420px;
  display: flex;
  justify-content: center;
  @media (max-width: 1300px) {
    max-width: 180px;
    max-height: 250px;
  }
  @media (max-width: 500px) {
    max-width: 130px;
    max-height: 200px;
  }
  animation: ${slideInBlurredLeft} 1s ease-in-out;
`;

const PhotoMe = styled.img`
  border-radius: 8px;
  filter: drop-shadow(4px 4px 50px #0e1425);
  z-index: 1;
  transition: all 0.8s;
  object-fit: cover;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1300px) {
    max-width: 200px;
    max-height: 250px;
  }
  @media (max-width: 500px) {
    filter: drop-shadow(4px 4px 50px #6363634a);

    max-width: 150px;
    max-height: 200px;
  }
`;

const AboutMe = styled.article`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 1rem;
  color: #ededed;
  animation: ${slideInBlurredLeft} 1.5s ease-in-out;
  @media (max-width: 1300px) {
    margin-left: 0;
  }
  h2 {
    ${typography.head.head4}
    @media (max-width: 500px) {
      ${typography.head.head5}
    }
  }
  @media (max-width: 500px) {
    ${typography.head.head5}
    margin: 0;
  }
`;

const AboutP = styled.p`
  ${typography.head.head6}
  @media (max-width: 1300px) {
    ${typography.head.head6}
    padding: 0 5rem;
  }
  @media (max-width: 500px) {
    ${typography.text.body1}
    padding: 0 1rem;
  }
  span {
    color: #8a8fa3;
  }
`;

function About() {
  return (
    <Container>
      <PhotoDiv>
        <PhotoMe src={Photo} alt="Photo me" />
      </PhotoDiv>
      <AboutMe>
        <h2>About Me</h2>
        <AboutP>
          As a seasoned entrepreneur with a proven track record of founding and
          successfully leading three businesses, I've deliberately pivoted my
          focus towards the dynamic world of full-stack development. This
          strategic shift allows me to seamlessly integrate my creative
          instincts and business acumen with technical prowess, resulting in the
          delivery of exceptional work. My motivation is deeply rooted in a
          passion for transforming conceptual ideas into tangible products,
          honed through years of strategic decision-making experience.
        </AboutP>
        <AboutP>
          My ambition is to make a lasting impact in the digital and
          technological realms. I aspire to collaborate with forward-thinking
          individuals and innovative companies that offer opportunities to
          showcase my refined and polished style. If you are seeking someone
          with the expertise to turn visions into visually stunning digital art,
          I warmly invite you to reach out. Let's explore the exciting
          possibilities of creating something extraordinary together.
        </AboutP>
      </AboutMe>
    </Container>
  );
}

export default About;
