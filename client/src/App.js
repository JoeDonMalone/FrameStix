import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Highlights from "./pages/Highlights";
import Story from "./pages/Story";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import './components/Footer/style.css'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"} component = {Home}/>
          <Route exact path="/contact/" component={Contact} />
          <Route exact path="/highlights/" component={Highlights} />
          <Route exact path="/story/" component={Story} />
          <Route><NoMatch /></Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
