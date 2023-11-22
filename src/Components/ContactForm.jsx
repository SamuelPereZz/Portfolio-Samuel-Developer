import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { typography } from "../Styles";
import { useState } from "react";
import Input from "./Input";
import { Button1 } from "./Button";

const kenburnT = css`
  @-webkit-keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    80% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  @keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    80% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  -webkit-animation: kenburns-top 0.5s ease-out both;
  animation: kenburns-top 0.35s ease-out both;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.307);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalCard = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 8px #000000);
  display: flex;
  padding: 2rem 3rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${kenburnT};
`;

const Title = styled.p`
  ${typography.head.head5}
  font-weight: 600;
  text-transform: uppercase;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
`;

const LabelForm = styled.label`
  color: var(--DarkGray, #0e1425);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0;
  :hover {
    color: #104db0;
  }
`;

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCard onClick={handleCardClick}>
        <Title>Send me a message</Title>
        <FormContainer onSubmit={handleSubmit}>
          <LabelForm htmlFor="fullName">Full name</LabelForm>
          <Input
            type="text"
            name="fullName"
            placeholder="Jhon Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <LabelForm htmlFor="email">email</LabelForm>
          <Input
            id="email"
            name="email"
            placeholder="user@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <LabelForm htmlFor="company">Company</LabelForm>
          <Input
            id="company"
            name="company"
            placeholder="Technology company"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <LabelForm htmlFor="phone">phone</LabelForm>
          <Input
            id="phone"
            name="phone"
            placeholder="999-888-777"
            value={formData.company}
            onChange={handleChange}
          />
          <LabelForm htmlFor="message">Leave me a message</LabelForm>
          <Message
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            required
          />
          <Button1 type="submit">Enviar</Button1>
        </FormContainer>
      </ModalCard>
    </ModalOverlay>
  );
};

const Message = styled.textarea`
  width: 22rem;
  height: 90px;
  resize: none;
  border: 1px solid #ccc;
  padding: 8px;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:hover,
  &:focus {
    border-color: #104db0;
    box-shadow: 0 0 5px rgba(16, 77, 176, 0.758);
  }
`;

export default ContactForm;
