import React from 'react';
import './Intro.css';

const Intro = () => {
	return (
		<div className='introduction component'>
			<div className='introHeading'>
				<h1>Hi, my name is <span style={{'color': '#52057B'}} >Pradhosh</span><br/><br/>I'm a full-stack developer.</h1>
			</div>
			<span className='learnMore'>Learn more about what I do</span>
			<div className='scroll-dark-intro'>
					<svg className="arrows-dark">
						<path className="a1 dark" d="M0 0 L30 32 L60 0"></path>
						<path className="a2 dark" d="M0 20 L30 52 L60 20"></path>
						<path className="a3 dark" d="M0 40 L30 72 L60 40"></path>
					</svg> 
			</div>
		</div>
	);
}

export default Intro;