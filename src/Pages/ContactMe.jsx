import styled from "@emotion/styled";
import { MdLocationOn } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Photo from "../assets/contactme.svg";
import { Button4 } from "../Components/Button";
import { typography } from "../Styles";
import Modal from "../Components/ModalForm";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";

const SectionAll = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 5rem;
  gap: 4rem;
  h1 {
    ${typography.head.head3}
    @media (max-width: 500px) {
      ${typography.head.head4}
    }
  }
  @media (max-width: 900px) {
    height: auto;
    padding: 4rem 2rem;
  }
  @media (max-width: 500px) {
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const InvitationMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Invitation = styled.p`
  ${typography.head.head5}
  @media (max-width: 500px) {
    ${typography.text.body2}
  }
`;

const CardContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px 40px;
  border: 1px solid black;
  background-color: #ededed;
  @media (max-width: 500px) {
    width: 330px;
    padding: 20px 20px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 6px;
`;

const Title = styled.p`
  ${typography.head.head5}
  font-weight: 600;
`;

const PhotoDiv = styled.div`
  display: flex;
  border-left: 1px solid black;
  padding: 0 2rem;
  @media (max-width: 900px) {
    border: none;
  }
`;

const PhotoMe = styled.img`
  border-radius: 20%;
  width: 325px;
  height: auto;
  @media (max-width: 1024px) {
    max-width: 200px;
    flex-direction: column;
  }
`;

const LinkNav = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  :hover {
  }
`;
const SocialIcon = styled.div`
  font-size: 27px;
  transition: color 0.3s;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  gap: 6px;
  background-color: #ffffff;
  padding: 2px;
  border-radius: 6px;
  align-items: center;
  color: ${(props) => props.hovercolor};
  &:hover,
  &:focus {
    color: ${(props) => props.hovercolor || "#ffffff"};
    transform: scale(1.3);
    filter: drop-shadow(-2px 4px 8px #0000006c);
  }
  @media (max-width: 400px) {
    font-size: 23px;
  }
`;

const Icons = styled.div`
  margin-right: 8px;
  font-size: 27px;
  transition: transform 0.3s ease;
  color: ${(props) => props.hovercolor};
  align-items: center;
  @media (max-width: 500px) {
    font-size: 20px;
    margin-right: 8px;
  }
`;

function ContactMePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <SectionAll>
      <InvitationMessage>
        <h1>I invite you to contact me at this time</h1>
        <Invitation>
          Looking to expand your team? Or do you need a web developer for a
          specific project? If I can help you in any way don't hesitate to fill
          this form.
        </Invitation>
      </InvitationMessage>
      <Container>
        <CardContact>
          <Title>Contact me</Title>
          <InfoContainer>
            <ContactInfo>
              <Icons as={MdLocationOn} hoverColor="#E1306C" />
              <p>Mexico City</p>
            </ContactInfo>
            <ContactInfo>
              <Icons as={MdMarkEmailRead} hoverColor="#3062e1" />
              <p>fernando.samuelperez01@gmail.com</p>
            </ContactInfo>
            <ContactInfo>
              <Icons as={MdPermPhoneMsg} hoverColor="#14b437" />{" "}
              <p>MX (+52) 5549291970</p>
            </ContactInfo>
          </InfoContainer>
          <IconsContainer>
            <LinkNav
              to={"https://www.instagram.com/samuel_perezz00/"}
              target="_blank"
            >
              <SocialIcon as={FaInstagram} hoverColor="#E1306C" />
            </LinkNav>
            <LinkNav
              to={
                "https://www.linkedin.com/in/fernando-samuel-p%C3%A9rez-951812285/"
              }
              target="_blank"
            >
              <SocialIcon as={FaLinkedin} hoverColor="#0A66C2" />
            </LinkNav>
            <LinkNav to={"https://github.com/SamuelPereZz"} target="_blank">
              <SocialIcon as={FaGithub} hoverColor="#171515" />
            </LinkNav>
          </IconsContainer>
        </CardContact>
        <PhotoDiv>
          <PhotoMe src={Photo} alt="Logo" />
        </PhotoDiv>
      </Container>
      <Button4 onClick={openModal}>
        Send me a message!
        <AiOutlineMessage style={{ fontSize: "22px" }} />
      </Button4>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </SectionAll>
  );
}

export default ContactMePage;
