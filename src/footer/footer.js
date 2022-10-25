import React from 'react';
import './footer.css';

const Footer = () => {
  return(
    <div className='footer'>
      <div className='CTA'>
        <span className='CTAtext'>Interested in working together?</span>
        <div className='CTABtn'>
          <a id='email' rel="noreferrer" href="mailto:pradhoshasokan@gmail.com" target='_blank'>Let's do this</a>
        </div>
      </div>
      <div className='footerMain'>
        <hr className='footer-line'/>
        <div className='wrapper'>
          <div className="icon github">
            <div className="tooltip">Github</div>
            <a className='iconProp' rel="noreferrer" target="_blank" href="https://github.com/PradhoshAsokan"><span><i className="fab fa-github"></i></span></a>
          </div>
          <div className="icon linkedin">
            <div className="tooltip">LinkedIn</div>
            <a className='iconProp' rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pradhosh-asokan/"><span><i className="fab fa-linkedin-in"></i></span></a>
          </div>
          <div className="icon twitter">
            <div className="tooltip">Twitter</div>
            <a className='iconProp' rel="noreferrer" target="_blank" href="https://twitter.com/Pradhosh_05"><span><i className="fab fa-twitter"></i></span></a>
          </div>
        </div>
        <hr className='footer-line'/>
      </div>
      
      <p id='footerCredits'>Designed by <a className='authorName' rel="noreferrer" target="_blank" href="https://github.com/PradhoshAsokan/"><span className='author'>Pradhosh Asokan</span></a>.</p>
      <div className='madeWith'>
        <span>Made with <a className='reactLog' rel="noreferrer" target="_blank" href="https://reactjs.org/"><i className="fab fa-react reactLogo"></i></a></span>
      </div>
    </div>
  );
}
export default Footer;