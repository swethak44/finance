import React from 'react';
import ExampleCarouselImage from './ExampleCarouselImage';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import gimage from './img/gimg.jpg';
import jimage from './img/jimg.jpg';
import kimage from './img/kimg.jpg';


export default function Loans() {
  return (
    <div>
      <h2 style={{textAlign:"center" , marginTop:"15px"}}>The Loans we are Providing</h2>
      
      <Container>
        <Carousel >
          <Carousel.Item>
            <img className="d-block w-100 mt-5" style={{height:"550px",width:"950px"}} src={gimage} alt="First slide" />
            <ExampleCarouselImage text="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 mt-5"style={{height:"550px",width:"950px"}}  src={jimage} alt="Second slide" />
              <ExampleCarouselImage text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 mt-5" style={{height:"550px",width:"950px"}} src={kimage} alt="First slide" />
                <ExampleCarouselImage text="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
        </Carousel> 
      </Container>
      
    </div>
  )
}
