import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"

function Slider(){
    return(<Carousel>
          <Carousel.Item>
            <img
             className="d-block w-100"
             src="/images/2.jpg"
              alt="First slide"/>
          
               <Carousel.Caption>
                 <h3>CCTV</h3>
                 <p><h4> To provide first-class, unique and premium solutions geared towards meeting the business</h4> </p>
                 <p><h4>objectives of clients through the use </h4></p>
                 <p><h4>of appropriate and cost-effective tecnologies..</h4></p>
              </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
           <img
            className="d-block w-100"
            src="/images/IPcamera 1.jpg"
            alt="Second slide"
          />


<Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/pexels11.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/HDI2.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
}

export default Slider;