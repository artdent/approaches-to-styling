import React from "react";

export const TableHeaderRow = () => (
  <>
    <div className="example-grid_header-cell side"></div>
    <div className="example-grid_header-cell">
      <p>CSS Modules</p>
    </div>
    <div className="example-grid_header-cell">
      <p>JSS</p>
      <p>
        <em>(withStyles)</em>
      </p>
    </div>
    <div className="example-grid_header-cell">
      <p>JSS</p>
      <p>
        <em>(useStyles)</em>
      </p>
    </div>
    <div className="example-grid_header-cell">
      <p>styled-components</p>
      <p>
        <em>(template strings)</em>
      </p>
    </div>
    <div className="example-grid_header-cell">
      <p>styled-components</p>
      <p>
        <em>(objects)</em>
      </p>
    </div>
  </>
);
