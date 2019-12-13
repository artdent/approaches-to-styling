import classNames from "classnames";
import Cleave from "cleave.js/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { isValid } from "../../utils/date";
import { cleaveOptions, DateInputProps } from "./base";

const useStyles = createUseStyles({
  root: {},
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  input: {
    minWidth: "200px",
    padding: "5px 10px",
    height: "35px",
    fontSize: "16px",
    borderRadius: "3px",
    border: "1px solid",
    borderColor: ({ disabled }: JssUseStylesExampleProps) =>
      disabled ? "#C4C4C5" : "black",
    backgroundColor: ({ disabled }: JssUseStylesExampleProps) =>
      disabled ? "#F1F1F2" : "white"
  }
});

export interface JssUseStylesExampleProps extends DateInputProps {
  classes?: Record<string, string>;
}

export const JssUseStylesExample: React.FC<JssUseStylesExampleProps> = ({
  value,
  onChangeDate,
  onChangeString,
  classes: classOverrides = {},
  disabled
}) => {
  const classes = useStyles({ disabled });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onChangeString(value, event);

    const date = new Date(value);

    if (isValid(date)) {
      onChangeDate(date, event);
    }
  };

  return (
    <div className={classNames(classes.root, classOverrides.root)}>
      <label
        className={classNames(classes.label, classOverrides.label)}
        htmlFor="input"
      >
        Date Input
      </label>
      <Cleave
        options={cleaveOptions}
        className={classNames(classes.input, classOverrides.input)}
        id="input"
        type="text"
        placeholder="MM/DD/YYYY"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
