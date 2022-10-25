import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'

import facedetector from '../assets/Untitled.png';
import './projref.css';

export default class projref extends Component {
  render() {
    return (
      <div className='carousalMainDIV'>
        <div className='headDIV'>
          <h2 className='projheader'>My Projects</h2>
          <hr className='projhr'/>
        </div>
        <div>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={facedetector}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src={facedetector}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item >
              <img
                className="d-block w-100"
                src={facedetector}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}