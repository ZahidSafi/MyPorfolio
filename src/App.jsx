import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import WorkExperience from "./components/pages/WorkExperience";
import BinaryRain from './components/common/BinaryRain'

function App() {
  return (
    <Router>
      <NavBar />
      <BinaryRain></BinaryRain>
      <div
        className="content"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work_experience" component={WorkExperience} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
