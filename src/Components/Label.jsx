import styled from "@emotion/styled";
import { colors, typography } from "../Styles";
const Tittle = styled.label`
  ${colors.gray.solid};
  ${typography.overline.overline1};
  font-size: 12px;
  
`;
const Label = ({ label, style }) => {
  return <Tittle style={{ ...style }}>{label}</Tittle>;
};

export default Label;
