import Cleave from "cleave.js/react";
import React from "react";
import { isValid } from "../../utils/date";
import { cleaveOptions, DateInputProps } from "./base";
import styled from "styled-components";

export const Root = styled.div({});

export const Label = styled.label({
  display: "block",
  fontWeight: "bold",
  marginBottom: "10px"
});

export const Input = styled(Cleave)(props => ({
  minWidth: "200px",
  padding: "5px 10px",
  height: "35px",
  fontSize: "16px",
  borderRadius: "3px",
  border: "1px solid black",
  borderColor: props.disabled ? "#C4C4C5" : "black",
  backgroundColor: props.disabled ? "#F1F1F2" : undefined
}));

export type StyledComponentsObjectsExampleProps = DateInputProps;

export const StyledComponentsObjectsExample: React.FC<StyledComponentsObjectsExampleProps> = ({
  value,
  onChangeDate,
  onChangeString,
  disabled
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onChangeString(value, event);

    const date = new Date(value);

    if (isValid(date)) {
      onChangeDate(date, event);
    }
  };

  return (
    <Root>
      <Label htmlFor="input">Date Input</Label>
      <Input
        options={cleaveOptions}
        id="input"
        type="text"
        placeholder="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Root>
  );
};
