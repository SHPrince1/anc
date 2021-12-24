
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Container, Col, Row} from "react-bootstrap"
import  "../Styles/Clientslide.css"

export default class Clientcarousel extends Component {
    render() {
        
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 2,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
    return (
        
        <Container>
  <Row>
    <Col>
    <div>
        <div className="tex-center">
        <h1>OUR CLIENTS</h1>
        </div>
        <Slider {...settings}>
          <div>
          <img
            className="d-block"
            src="/images/BW.png"
            alt="Second slide"
          />
          </div>
          <div>
          <img
            className="d-block "
            src="/images/sterling.png"
            alt="Second slide"
          />
          </div>
          <div>
          <img
            className="d-block"
            src="/images/JTPS.png"
            alt="Second slide"
          />
          </div>
          <div>
          <img
            className="d-block "
            src="/images/SilverbirdGroup.png"
            alt="Second slide"
          />
          </div>
          <div>
          
          <img
            className="d-block w-100"
            src="/images/grandstream.jpg"
            alt="Second slide"
          />
          </div>
         
          <div>
          
          <img
            className="d-block "
            src="/images/trixbox.jpg"
            alt="Second slide"
          />
          </div>
          
          <div>
          
          <img
            className="d-block"
            src="/images/elastix.png"
            alt="Second slide"
          />
          </div>
         
         
        </Slider>
      </div>
      </Col>
  </Row>
</Container>
    );
  }
}
    