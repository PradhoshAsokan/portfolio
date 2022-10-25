import React, {Component} from 'react';
import Intro from './Intro/Intro'; 
import Bio from './Bio/Bio';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Footer from './footer/footer'
import ScrollIndicator from './ScrollIndicator/Scrollindicator'
import ScrollToTop from './ScrollToTop/ScrollToTop';
import './App.css';
import './index.css';

export default class App extends Component {

  render () {
    return (
      <div className="App">
        <Intro/>  
        <Bio/>
        <Skills/>
        <Projects/>
        <Footer/>
        <ScrollToTop/>
        <ScrollIndicator/>
      </div>
    );
  }
};