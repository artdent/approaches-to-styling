import React, { useState } from "react";
import withStyles, { createUseStyles } from "react-jss";
import styled from "styled-components";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import { JssUseStylesExample } from "../DateInput/JssUseStylesExample";
import JssWithStylesExample from "../DateInput/JssWithStylesExample";
import {
  Input as SCInput,
  Root as SCRoot,
  StyledComponentsExample
} from "../DateInput/StyledComponentsExample";
import {
  Input as SCOInput,
  Root as SCORoot,
  StyledComponentsObjectsExample
} from "../DateInput/StyledComponentsObjectsExample";
import styles from "./NoBorderStylesRow.module.css";

const StyledWithStylesExample: any = withStyles({
  root: {
    borderBottom: "2px solid",
    borderColor: "black",
    "&:focus-within": {
      borderColor: "#39abd1"
    }
  },
  input: {
    border: "unset"
  }
})(JssWithStylesExample as any);

const useStyles = createUseStyles({
  root: {
    borderBottom: "2px solid",
    borderColor: "black",
    "&:focus-within": {
      borderColor: "#39abd1"
    }
  },
  input: {
    border: "unset"
  }
});

const SCWrapper = styled.div`
  ${SCRoot} {
    border-bottom: 2px solid;
    border-color: black;
  }

  ${SCRoot}:focus-within {
    border-color: #39abd1;
  }

  ${SCInput} {
    border: unset;
  }
`;

const SCOWrapper = styled.div({
  [SCORoot]: {
    borderBottom: "2px solid",
    borderColor: "black"
  },

  [`${SCORoot}:focus-within`]: {
    borderColor: "#39abd1"
  },

  [SCOInput]: {
    border: "unset"
  }
});

export const NoBorderStylesRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();
  const classesFromUseStyles = useStyles();

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>No border styles</p>
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
