import React from "react";
import "./App.css";
import { Gallery } from "./gallery";
import { useLazyBackgroundLoad } from "./hooks/useLazyBackgroundLoad";

function App() {
  useLazyBackgroundLoad();
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default App;
