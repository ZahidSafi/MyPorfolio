import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Home from "./components/pages/Home";
import WorkExperience from "./components/pages/WorkExperience";
import BinaryRain from "./components/common/BinaryRain";

function App() {
  return (
    <Router>
      <BinaryRain></BinaryRain>
      <div
        className="content"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work_experience" component={WorkExperience} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
