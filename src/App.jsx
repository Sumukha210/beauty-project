import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/common/Navbar";
import Home from "./components/Home";
import Paintings from "./components/Paintings.jsx";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/paintings" component={Paintings} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
