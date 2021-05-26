import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Highlights from "./pages/Highlights";
import Story from "./pages/Story";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/FrameStix/"} component = {Home}/>
          <Route exact path="/FrameStix/contact/" component={Contact} />
          <Route exact path="/FrameStix/highlights/" component={Highlights} />
          <Route exact path="/FrameStix/story/" component={Story} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
