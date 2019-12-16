import Cleave from "cleave.js/react";
import React from "react";
import { isValid } from "../../utils/date";
import { cleaveOptions, DateInputProps } from "./base";
import styled from "styled-components";

export const Root = styled.div``;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled(Cleave)`
  min-width: 200px;
  padding: 5px 10px;
  height: 35px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid black;
  border-color: ${props => (props.disabled ? "#C4C4C5" : "black")};
  background-color: ${props => (props.disabled ? "#F1F1F2" : undefined)};
`;

export interface StyledComponentsExampleProps extends DateInputProps {
  readonly classes?: Record<string, string>;
}

export const StyledComponentsExample: React.FC<StyledComponentsExampleProps> = ({
  value,
  onChangeDate,
  onChangeString,
  classes = {},
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
      <Label htmlFor="input" className={classes.label}>Date Input</Label>
      <Input
        options={cleaveOptions}
        id="input"
        type="text"
        placeholder="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={classes.input}
      />
    </Root>
  );
};
