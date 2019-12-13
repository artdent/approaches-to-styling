import classNames from "classnames";
import Cleave from "cleave.js/react";
import React from "react";
import { isValid } from "../../utils/date";
import { cleaveOptions, DateInputProps } from "./base";
import styles from "./CssModulesExample.module.css";

export interface CssModulesExampleProps extends DateInputProps {
  readonly classes?: Record<string, string>;
}

export const CssModulesExample: React.FC<CssModulesExampleProps> = ({
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
    <div className={classNames(styles.root, classes.root)}>
      <label
        className={classNames(styles.label, classes.label)}
        htmlFor="input"
      >
        Date Input
      </label>
      <Cleave
        options={cleaveOptions}
        className={classNames(styles.input, classes.input, {
          [styles.disabled]: disabled,
          [classes.disabled]: disabled
        })}
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
