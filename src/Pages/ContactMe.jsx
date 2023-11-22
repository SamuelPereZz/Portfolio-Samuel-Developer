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
import Modal from "../Components/ContactForm";
import { useState } from "react";

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
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  gap: 6px;
  background-color: #8a8fa3;
  padding: 5px 5px;
  border-radius: 8px;
  align-items: center;
  color: #ededed;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 6px;
`;

const Title = styled.p`
  ${typography.head.head5}
  font-weight: 600;
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
    <SectionAll  >
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
              <MdLocationOn />
              <p>Mexico City</p>
            </ContactInfo>
            <ContactInfo>
              <MdMarkEmailRead />
              <p>fernando.samuelperez01@gmail.com</p>
            </ContactInfo>
            <ContactInfo>
              <MdPermPhoneMsg /> <p>MX (+52) 5549291970</p>
            </ContactInfo>
          </InfoContainer>
          <IconsContainer>
            <Icons>
              <FaInstagram />
            </Icons>
            <Icons>
              <FaLinkedin />
            </Icons>
            <Icons>
              <FaGithub />
            </Icons>
          </IconsContainer>
        </CardContact>
        <PhotoDiv>
          <PhotoMe src={Photo} alt="Logo" />
        </PhotoDiv>
      </Container>
      <Button4 onClick={openModal}>Send me a message</Button4>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </SectionAll>
  );
}

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

export default ContactMePage;
