import React from 'react';
import Slide from 'react-reveal/Slide';

import './Skills.css';

const Skills = () => {
  return(
    <div className='component Skills'>
      <div className='skillheading'>
        <h2 className='skillHeading'>My skills</h2>
        <hr className='skillhr'/>
      </div>
      <div className='SkillDiv'>
      <div className='SkillDiv-child'>
          <span className='SkillDiv-title'>Front-end</span>
          <Slide bottom cascade>
            <div>
              <div className='bar'>
              <div className='topic'>HTML</div>
              <div className='progress'>
                <div className="progress-value topic1"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='topic'>CSS</div>
              <div className='progress'>
                <div className="progress-value topic2"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='topic'>JavaScript</div>
              <div className='progress'>
                <div className="progress-value topic3"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='topic'>React</div>
              <div className='progress'>
                <div className="progress-value topic4"></div>
              </div>
            </div>
            </div>
          </Slide>
        </div>
        <div className='SkillDiv-child'>
          <span className='SkillDiv-title'>Back-end</span>
          <Slide bottom cascade>
            <div>
              <div className='bar'>
              <div className='topic'>Node.js</div>
              <div className='progress'>
                <div className="progress-value topic5"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='topic'>Express.js</div>
              <div className='progress'>
                <div className="progress-value topic6"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='topic'>SQL</div>
              <div className='progress'>
                <div className="progress-value topic7"></div>
              </div>
            </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
export default Skills;