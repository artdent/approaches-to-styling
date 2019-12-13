import React, { useState } from "react";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import JssWithStylesExample from "../DateInput/JssWithStylesExample";
import { JssUseStylesExample } from "../DateInput/JssUseStylesExample";
import { StyledComponentsExample } from "../DateInput/StyledComponentsExample";
import { StyledComponentsObjectsExample } from "../DateInput/StyledComponentsObjectsExample";

export const NoStylesRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>No extra styles applied</p>
      </div>
      <div className="example-grid_cell">
        <CssModulesExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
        />
      </div>
      <div className="example-grid_cell">
        <JssWithStylesExample
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
        />
      </div>
      <div className="example-grid_cell">
        <StyledComponentsExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
        />
      </div>
      <div className="example-grid_cell">
        <StyledComponentsObjectsExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
        />
      </div>
    </>
  );
};
