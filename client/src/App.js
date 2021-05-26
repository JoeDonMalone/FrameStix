import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
{/*  
          <Route exact path={"/contact"}>
            <Contact />
          </Route>
          <Route exact path={"/story"}>
            <Story />
          </Route>
          <Route exact path={"/highlights"}>
            <Highlights />
          </Route> */}
          
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
