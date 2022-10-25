import React from "react";
import './ContactMe.css';

export default function ScrollToBottom() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 100000,
      behavior: "smooth"
    });
  };

  return (
    <div className="scroll-to-bottom">
      <div className='mailDiv'   onClick={scrollToBottom} >
        <span id='contactMe' >Contact me</span>
      </div>
    </div>
  );
}