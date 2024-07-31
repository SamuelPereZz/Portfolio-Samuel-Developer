import styled from '@emotion/styled';
import { typography } from '../Styles';
import Travel from '../assets/Hobbies/volcan.jpg';
import bolsa from '../assets/Hobbies/bolsa.jpg';
import hackthon from '../assets/Hobbies/HackMex.jpg';

const SectionFive = styled.div`
  height: 100%;
  width: 100%;
  background-color: #8a8fa3;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 5rem 5%;
  align-items: center;
  justify-content: center;
`;

const HobbiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 17px;
  align-items: center;
  ${typography.subtitle.subtitle1}
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HobbiCard = styled.div`
  background-color: #7a829b;
  width: 319px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  text-align: center;
  justify-content: space-around;
  h2,
  h1 {
    ${typography.head.head5}
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 500px) {
      ${typography.head.head6}
    }
  }

  p {
    ${typography.text.body2}
    padding: 0 1rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 500px) {
      ${typography.subtitle.subtitle2}
    }
  }

  @media (max-width: 500px) {
    gap: 5px;
    max-width: 280px;
    max-height: 220px;
  }
`;

const ImgSkill = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

function Hobbies() {
  return (
    <SectionFive>
      <h1 style={{ textTransform: 'uppercase', fontSize: 'italic' }}>
        Hobbies
      </h1>
      <HobbiesContainer>
        <HobbiCard>
          <ImgSkill src={Travel} alt='Travel' />
        </HobbiCard>
        <HobbiCard>
          <ImgSkill src={hackthon} alt='Travel' />
        </HobbiCard>
        <HobbiCard>
          <ImgSkill src={bolsa} alt='Travel' />
        </HobbiCard>
        <HobbiCard>
          <h2>Exploring New Places</h2>
          <p>
            I have a profound interest in immersing myself in diverse
            landscapes, discovering unique cultures, and embracing the beauty of
            new ecosystems.
          </p>
        </HobbiCard>
        <HobbiCard>
          <h2>Attending Technology Events</h2>
          <p>
            I enjoy participating in technology events such as talks,
            conferences, hackathons, and meetups. These gatherings provide me
            with valuable opportunities to connect with fellow tech enthusiasts
            and expand my horizons within the industry.
          </p>
        </HobbiCard>

        <HobbiCard>
          <h2>Staying Updated in Technology</h2>
          <p>
            I am passionate about staying abreast of the latest technological
            advancements, exploring emerging trends, and continuously expanding
            my knowledge in the ever-evolving world of technology.
          </p>
        </HobbiCard>
      </HobbiesContainer>
    </SectionFive>
  );
}

export default Hobbies;
