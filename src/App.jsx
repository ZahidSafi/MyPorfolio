import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/NavBar';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import WorkExperience from './components/pages/WorkExperience';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work_experience" component={WorkExperience} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );

}

export default App
