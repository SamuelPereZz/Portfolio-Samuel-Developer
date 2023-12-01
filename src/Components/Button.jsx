import styled from "@emotion/styled";
import { colors, typography } from "../Styles";

export const Button1 = styled.button`
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  padding: 2px 10px;
  height: 40px;
  background-color: #364153;
  border-radius: 8px;
  color: #ededed;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #8a8fa3;
    color: #000000;
    border: 2px solid black;
  }
  &:active {
    background-color: #313944;
    color: #b2b2b2;
  }

  @media (max-width: 500px) {
    padding: 5px 10px;
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
    border: 2px solid black;

  }
`;

export const Button3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  min-height: 40px;
  background-color: none;
  border-radius: 8px;
  padding: 2px 10px;
  color: #0e1425;
  border: none;
  &:hover {
    background-color: #aebdc7;
    border: 2px solid black;

  }
  &:active {
    border: 1px solid #0e1425;
    background-color: #8c98a0;
    color: #222839;
  }
  @media (max-width: 500px) {
    min-width: 80px;
    ${typography.text.body2}
  }
`;

export const Button4 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 161px;
  padding: 2px 10px;
  height: 40px;
  background-color: #ededed;
  border-radius: 8px;
  color: ${colors.gray["solid"]};
  border: 0.3px solid #364153;
  cursor: pointer;
  &:hover {
    background-color: #aebdc7;
    border: 2px solid black;

  }
`;

const Buttom = () => {
  return <Button1>SEARCH</Button1>;
};

export default Buttom;
