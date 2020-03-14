import React from 'react';
import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Courses from './components/Courses';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
   
        <Navbar />
  
  <Element name="Home">
    <Route exact path="/" component={Header} />
  </Element>

  <Element name="About">
    <Route exact path="/" component={About} />
  </Element>

  <Element  name="Skills">
    <Route exact path="/" component={Skills} />
  </Element>

  <Element name="Projects">
    <Route exact path="/" component={Projects} />
  </Element>

  <Element name="Courses">
    <Route exact path="/" component={Courses} />
  </Element>

  <Element name="Contact">
    <Route exact path="/" component={Contact} />
  </Element>

       
    </div>
  );
}

export default App;
