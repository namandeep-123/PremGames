import React from "react";
import Home from "./Pages/Home";
import GlobalStyled from "./components/GlobalStyled";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
