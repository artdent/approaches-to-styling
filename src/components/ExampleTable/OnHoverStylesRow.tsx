import React, { useState } from "react";
import withStyles, { createUseStyles } from "react-jss";
import styled from "styled-components";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import { JssUseStylesExample } from "../DateInput/JssUseStylesExample";
import JssWithStylesExample from "../DateInput/JssWithStylesExample";
import {
  Input as SCInput,
  StyledComponentsExample
} from "../DateInput/StyledComponentsExample";
import {
  Input as SCOInput,
  StyledComponentsObjectsExample
} from "../DateInput/StyledComponentsObjectsExample";
import styles from "./OnHoverStylesRow.module.css";

const StyledWithStylesExample: any = withStyles({
  input: {
    "&:hover, &:focus": {
      backgroundColor: "#39abd1",
      color: "white"
    }
  }
})(JssWithStylesExample as any);

const useStyles = createUseStyles({
  input: {
    "&:hover, &:focus": {
      backgroundColor: "#39abd1",
      color: "white"
    }
  }
});

const SCWrapper = styled.div`
  ${SCInput}:hover, ${SCInput}:focus {
    background-color: #39abd1;
    color: white;
  }
`;

const SCOWrapper = styled.div({
  [`${SCOInput}:hover, ${SCOInput}:focus`]: {
    backgroundColor: "#39abd1",
    color: "white"
  }
});

export const OnHoverStylesRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();
  const classesFromUseStyles = useStyles();

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>&quot;on hover&quot; styles</p>
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
        <SCWrapper>
          <StyledComponentsExample
            value={dateString}
            onChangeDate={setDateObject}
            onChangeString={setDateString}
          />
        </SCWrapper>
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
