import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import EighthFooter from "./components/EighthFooter";
import Home  from "./components/Home";
import About  from "./components/About";
import Contact  from "./components/Contact";
import Playground from "./components/Playground";
import ProjectOne from "./components/ProjectOne";
import ProjectTwo from "./components/ProjectTwo";
import ProjectThree from "./components/ProjectThree";
import ProjectFour from "./components/ProjectFour";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
      <Header/>
      <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/playground" exact component={() => <Playground />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/airline-booking" exact component={() => <ProjectOne />} />
          <Route path="/personal-portfolio1" exact component={() => <ProjectTwo />} />
          <Route path="/responsive-design" exact component={() => <ProjectThree />} />
          <Route path="/yt-downloader" exact component={() => <ProjectFour />} />
      </Switch>
      <EighthFooter/>
      </Router>
    </div>
  );
}

export default App;
