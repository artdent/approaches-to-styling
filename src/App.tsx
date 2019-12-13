import React from "react";
import "./App.css";
import { NoBorderStylesRow } from "./components/ExampleTable/NoBorderStylesRow";
import { NoStylesRow } from "./components/ExampleTable/NoStylesRow";
import { OnHoverStylesRow } from "./components/ExampleTable/OnHoverStylesRow";
import { OverridePropBasedStyleRow } from "./components/ExampleTable/OverridePropBasedStyleRow";
import { PlaceholderColorRow } from "./components/ExampleTable/PlaceholderColorRow";
import { PropBasedStyleRow } from "./components/ExampleTable/PropBasedStyleRow";
import { TableHeaderRow } from "./components/ExampleTable/TableHeaderRow";

const App: React.FC = () => (
  <div className="App">
    <div>
      <div className="example-grid">
        <TableHeaderRow />
        <NoStylesRow />
        <NoBorderStylesRow />
        <OnHoverStylesRow />
        <PlaceholderColorRow />
        <PropBasedStyleRow />
        <OverridePropBasedStyleRow />
      </div>
    </div>
  </div>
);

export default App;
