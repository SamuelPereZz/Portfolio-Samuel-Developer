import styled from "@emotion/styled";
import Label from "./Label";
import { typography } from "../Styles";

const Entrada = styled.input`
  border: none;
  border-bottom: 1px solid #364153;
  padding-bottom: 3px;
  outline: none;
  height: 36px;
  ${typography.text.body2};
  :focus {
    border: none;
    border-bottom: 1px solid #104db0;
    border-radius: 0px;
  }
`;

const Input = ({
  icon = "",
  id,
  name,
  type,
  value,
  placeholder,
  label,
  style,
  min,
  onChange,
  onBlur,
}) => {
  const handlePadding = icon ? "36px" : "1px";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {label && <Label htmlFor={id || name} label={label} />}
      <Entrada
        min={min}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ paddingLeft: handlePadding }}
      />
    </div>
  );
};

export default Input;
