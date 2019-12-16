import React, { useState } from "react";
import withStyles, { createUseStyles } from "react-jss";
import styled from "styled-components";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import { JssUseStylesExample } from "../DateInput/JssUseStylesExample";
import JssWithStylesExample from "../DateInput/JssWithStylesExample";
import {
  StyledComponentsExample
} from "../DateInput/StyledComponentsExample";
import {
  Input as SCOInput,
  StyledComponentsObjectsExample
} from "../DateInput/StyledComponentsObjectsExample";
import styles from "./PlaceholderColorRow.module.css";

const StyledWithStylesExample: any = withStyles({
  input: {
    backgroundColor: "black",
    color: "white",
    "&::placeholder": {
      fontWeight: "bold"
    }
  }
})(JssWithStylesExample as any);

const useStyles = createUseStyles({
  input: {
    backgroundColor: "black",
    color: "white",
    "&::placeholder": {
      fontWeight: "bold"
    }
  }
});

const SCOWrapper = styled.div({
  [SCOInput]: {
    backgroundColor: "black",
    color: "white"
  },
  [`${SCOInput}::placeholder`]: {
    fontWeight: "bold"
  }
});

export const PlaceholderColorRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();
  const classesFromUseStyles = useStyles();

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>Placeholder color</p>
      </div>
      <div className="example-grid_cell">
        <CssModulesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          classes={styles}
        />
      </div>
      <div className="example-grid_cell">
        <StyledWithStylesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
        />
      </div>
      <div className="example-grid_cell">
        <JssUseStylesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          classes={classesFromUseStyles}
        />
      </div>
      <div className="example-grid_cell">
        <StyledComponentsExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          classes={classesFromUseStyles}
        />
      </div>
      <div className="example-grid_cell">
        <SCOWrapper>
          <StyledComponentsObjectsExample
            value={dateString}
            onChangeDate={setDateObject}
            onChangeString={setDateString}
          />
        </SCOWrapper>
      </div>
    </>
  );
};
