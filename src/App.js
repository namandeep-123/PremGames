import React from "react";
import Home from "./Pages/Home";
import GlobalStyled from "./components/GlobalStyled";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
