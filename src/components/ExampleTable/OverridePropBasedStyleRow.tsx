import React, { useState } from "react";
import withStyles, { createUseStyles } from "react-jss";
import styled from "styled-components";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import {
  JssUseStylesExample,
  JssUseStylesExampleProps
} from "../DateInput/JssUseStylesExample";
import JssWithStylesExample, {
  JssWithStylesExampleProps
} from "../DateInput/JssWithStylesExample";
import {
  Input as SCInput,
  StyledComponentsExample
} from "../DateInput/StyledComponentsExample";
import {
  Input as SCOInput,
  StyledComponentsObjectsExample
} from "../DateInput/StyledComponentsObjectsExample";
import styles from "./OverridePropBasedStyleRow.module.css";

const StyledWithStylesExample: any = withStyles({
  input: {
    borderColor: ({ disabled }: JssWithStylesExampleProps) =>
      disabled && "#F1F1F2",
    backgroundColor: ({ disabled }: JssWithStylesExampleProps) =>
      disabled && "#3E3E3F",
    color: ({ disabled }: JssWithStylesExampleProps) => disabled && "#c4c4c5",
    cursor: ({ disabled }: JssWithStylesExampleProps) =>
      disabled && "not-allowed"
  }
})(JssWithStylesExample as any);

const useStyles = createUseStyles({
  input: {
    borderColor: ({ disabled }: JssUseStylesExampleProps) =>
      disabled && "#F1F1F2",
    backgroundColor: ({ disabled }: JssUseStylesExampleProps) =>
      disabled && "#3E3E3F",
    color: ({ disabled }: JssUseStylesExampleProps) => disabled && "#c4c4c5",
    cursor: ({ disabled }: JssUseStylesExampleProps) =>
      disabled && "not-allowed"
  }
});

const SCWrapper: any = styled.div`
  ${(props: any) =>
    props.disabled &&
    `${SCInput} {
      border-color: #F1F1F2;
      background-color: #3E3E3F;
      color: #c4c4c5;
      cursor: not-allowed;
    `}
`;

const SCOWrapper: any = styled.div(
  (props: any) =>
    props.disabled && {
      [SCOInput]: {
        border: "unset",
        backgroundColor: "#3E3E3F",
        color: "#c4c4c5",
        cursor: "not-allowed"
      }
    }
);

export const OverridePropBasedStyleRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();
  const [disabled, setDisabled] = useState(true);
  const classesFromUseStyles = useStyles({ disabled });

  const onToggleDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setDisabled(checked);
  };

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>Prop-based styles</p>
        <p>
          <em>(override)</em>
        </p>
        <label>
          disabled:
          <input
            type="checkbox"
            checked={disabled}
            onChange={onToggleDisabled}
          />
        </label>
      </div>
      <div className="example-grid_cell">
        <CssModulesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          classes={styles}
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <StyledWithStylesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <JssUseStylesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          classes={classesFromUseStyles}
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <SCWrapper disabled={disabled}>
          <StyledComponentsExample
            value={dateString}
            onChangeDate={setDateObject}
            onChangeString={setDateString}
            disabled={disabled}
          />
        </SCWrapper>
      </div>
      <div className="example-grid_cell">
        <SCOWrapper disabled={disabled}>
          <StyledComponentsObjectsExample
            value={dateString}
            onChangeDate={setDateObject}
            onChangeString={setDateString}
            disabled={disabled}
          />
        </SCOWrapper>
      </div>
    </>
  );
};
