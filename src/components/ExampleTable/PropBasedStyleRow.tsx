import React, { useState } from "react";
import { CssModulesExample } from "../DateInput/CssModulesExample";
import { JssUseStylesExample } from "../DateInput/JssUseStylesExample";
import JssWithStylesExample from "../DateInput/JssWithStylesExample";
import { StyledComponentsExample } from "../DateInput/StyledComponentsExample";
import { StyledComponentsObjectsExample } from "../DateInput/StyledComponentsObjectsExample";

export const PropBasedStyleRow = () => {
  const [dateString, setDateString] = useState("");
  const [, setDateObject] = useState<Date>();
  const [disabled, setDisabled] = useState(true);

  const onToggleDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;

    setDisabled(checked);
  };

  return (
    <>
      <div className="example-grid_header-cell side">
        <p>Prop-based styles</p>
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
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <JssWithStylesExample
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
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <StyledComponentsExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          disabled={disabled}
        />
      </div>
      <div className="example-grid_cell">
        <StyledComponentsObjectsExample
          value={dateString}
          onChangeDate={setDateObject}
          onChangeString={setDateString}
          disabled={disabled}
        />
      </div>
    </>
  );
};
