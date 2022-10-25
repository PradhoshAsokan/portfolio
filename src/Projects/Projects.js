import React from "react";
import Slide from 'react-reveal/Slide';
import facedetectorGif from '../assets/Face_detector.gif';
import User_search from '../assets/User_search.gif';
import Todo from '../assets/Todo.gif';
import Calculator from '../assets/Calculator.gif';
import './Projects.css';

export default function Projects() {

  return (
    <div className='component Projects'>
      <div className='projheading'>
          <h2 className='projHeader'>my projects</h2>
          <hr className='projhr'/>
      </div>
      <div className='carousalDiv'>
        <Slide left cascade>
          <div className='projCard'>
            <img className='carousalImage' alt='project' src={facedetectorGif}/>
            <div className='overlay'>
              <div className='description'>
                Face Detector
                <div className='btn'>
                  <a className='codeBtn' rel="noreferrer" target='_blank' href='https://facedetector-001.herokuapp.com/'>Visit Website</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right cascade>
          <div className='projCard'>
            <img className='carousalImage' alt='project' src={User_search}/>
            <div className='overlay'>
              <div className='description'>
                Filter List
                <div className='btn'>
                  <a className='codeBtn' rel="noreferrer" target='_blank' href='https://pradhoshasokan.github.io/user-search/'>Visit Website</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide left cascade>
          <div className='projCard'>
            <img className='carousalImage' alt='project' src={Todo}/>
            <div className='overlay'>
              <div className='description'>
                To-Do App.
                <div className='btn'>
                  <a className='codeBtn' rel="noreferrer" target='_blank' href='https://pradhoshasokan.github.io/To-Do-List/'>Visit Website</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide right cascade>
          <div className='projCard'>
            <img className='carousalImage' alt='project' src={Calculator}/>
            <div className='overlay'>
              <div className='description'>
                Calculator
                <div className='btn'>
                  <a className='codeBtn' rel="noreferrer" target='_blank' href='https://pradhoshasokan.github.io/calculator/'>Visit Website</a>
                </div>
              </div>
            </div>            
          </div>
        </Slide>
      </div>
    </div>
  );
}
