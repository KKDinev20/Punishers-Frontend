import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Resume from './pages/Resume/Resume';
import CV from './pages/CV/CV';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components';
import SignUp from './pages/SignUp/SignUp';

import ResumeSamples from './pages/Resume/ResumeExamples/ResumeSamples';
import CVSamples from './pages/CV/CVExamples/CVSamples';
import ResumeBuilder from './pages/Resume/ResumeBuilder/ResumeBuilder';
import CVBuilder from './pages/CV/CVBuilder/CVBuilder';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/resume' component={Resume} />
        <Route path='/cv' component={CV} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/resume-builder' component={ResumeBuilder} />
        <Route path='/resume-samples' component={ResumeSamples} />
        <Route path='/cv-builder' component={CVBuilder} />
        <Route path='/cv-samples' component={CVSamples} />
      </Switch>
    </Router>
  );
}

export default App;
