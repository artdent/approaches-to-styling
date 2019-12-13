import Cleave from "cleave.js/react";
import React from "react";
import withStyles from "react-jss";
import { isValid } from "../../utils/date";
import { cleaveOptions, DateInputProps } from "./base";
import { Classes } from "jss";

const styles = {
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
    borderColor: ({ disabled }: JssWithStylesExampleProps) =>
      disabled ? "#C4C4C5" : "black",
    backgroundColor: ({ disabled }: JssWithStylesExampleProps) =>
      disabled ? "#F1F1F2" : "white"
  }
};

export interface JssWithStylesExampleProps extends DateInputProps {
  classes: Classes;
}

const JssWithStylesExample: React.FC<JssWithStylesExampleProps> = ({
  value,
  onChangeDate,
  onChangeString,
  classes,
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
    <div className={classes.root}>
      <label className={classes.label} htmlFor="input">
        Date Input
      </label>
      <Cleave
        options={cleaveOptions}
        className={classes.input}
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

export default withStyles(styles)(JssWithStylesExample);
