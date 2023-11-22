import styled from "@emotion/styled";
import { colors, typography } from "../Styles";

export const Button1 = styled.button`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 55px;
  background-color: #364153;
  border-radius: 8px;
  color: #ededed;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #8a8fa3;
  }
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 40px;
  background-color: #ededed;
  border-radius: 8px;
  border: none;
  color: #364153;
  ${typography.head.head4}

  cursor: pointer;
  &:hover {
    color: #68758b;
  }
`;

export const Button3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: none;
  border-radius: 8px;
  color: black;
  border: none;
`;

export const Button4 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: #ededed;
  border-radius: 8px;
  color: ${colors.gray["solid"]};
  border: 0.3px solid #364153;
  cursor: pointer;
  &:hover {
    background-color: #aebdc7;
  }
`;

const Buttom = () => {
  return <Button1>SEARCH</Button1>;
};

export default Buttom;
