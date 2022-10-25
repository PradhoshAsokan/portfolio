import React, {Component} from 'react';
import Tilt from 'react-tilt';
import Slide from 'react-reveal/Slide';
import profile from '../assets/profile.jpg';
import Resume from '../assets/Resume.pdf'
import ScrollToBottom from '../ScrollToTop/ContactMe'
import './Bio.css';

export default class Bio extends Component {
  render() {
    return (
      <div className='component Bio'>
        <div className='bioWrapper'>
          <div className='heading'>
            <span>
              <h2 className='bioHeading'>about me</h2>
              <hr className='biohr'/>
            </span>
          </div>
          <Slide bottom cascade>
            <div className='content'>
              <div className='disPic flex-child'>
                <Tilt className="Tilt " options={{ max : 25 }} >
                  <div className="Tilt-inner" >
                    <img id='dp' alt='propic' src={profile}/>
                  </div>
                </Tilt>
              </div>
              <div className='bioContent flex-child'>
                <span style={{fontSize:"25px"}}>Hi, Nice to meet you.</span>
                <p>
                I’m a web developer / designer living in Chennai, India. 
                I enjoy building everything from small business sites to rich interactive web apps. 
                I create digital products for both business and consumer use.
                </p>
                <div className='BioBtn'>
                  <div className='resumeBtn'>
                    <a id='resume' rel="noreferrer"  target='_blank'>My Resume</a>
                  </div>
                  <div className='mailDiv' >
                    <ScrollToBottom/>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <div className='scroll-light'>
              <svg className="arrows-light">
                <path className="a1 light" d="M0 0 L30 32 L60 0"></path>
                <path className="a2 light" d="M0 20 L30 52 L60 20"></path>
                <path className="a3 light" d="M0 40 L30 72 L60 40"></path>
              </svg> 
          </div>
        </div>
        
      </div>
    );
  }
}
