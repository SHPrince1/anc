
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap"
import  "../Styles/Footer.css"


function Footer(){
    return (
<div className="foot">        
        <Container fluid ="md">
  <Row>
    <Col><div className="main-footer">
            <div className="Container">
                <div className="row">
                {/*Colum1*/}
                    <div className="col-md-3 col-sm-6">
                        <h2>Home</h2>
                            <ul className="list-unstyled">
                            <li ><img src = "/images/Complete1.png" height ="85px"/></li>
                        
                            </ul>
                    </div>
                    {/*Colum1*/}
                    <div className="col-md-3 col-sm-6">
                        <h2>ABOUT US</h2>
                            <ul className="list-unstyled">
                                 
                            </ul>
                    </div>
                    {/*Colum1*/}
                    <div className="col-md-3 col-sm-6">
                        <h2>SERVICES</h2>
                            <ul className="list-unstyled">
                                <li>STRUCTURED CABLING</li>
                                <li>CCTV SURVEILLANCE</li>
                                <li>LOGISTICS</li>
                                <li>HARDWARE/INFRASTRUCTURE</li>
                                <li>NETWORK SOLUTIONS CONSULTING</li>
                                <li>ACCESS CONTROL & EVENT MANAGEMENT SOLUTIONS</li>
                                <li>ENVIROMENTAL MONITORING SYSTEM</li>
                                <li>DATA CENTER</li>
                            </ul>
                    </div>
                    {/*Colum1*/}
                    <div className="col-md-3 col-sm-6">
                        <h2>CONTACT</h2>
                            <ul className="list-unstyled">
                                <li>40 Alafia street,Bishop Aggey Mushin,Lagos Nigeria.</li>
                                <li>-----------------------------------------------</li>
                                
                                <li>+234 1 790 8059, +234 802 570 3473</li>
                                <li>-----------------------------------------------</li>
                                <li>info@azoginigcoy.com</li>
                                <li>-----------------------------------------------</li>
                                
                            </ul>
                    </div>
                    
                </div>
                {/*Footer */}
                <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} ANG-all right reserved
                </p>

                </div>
            </div>
        </div></Col>
  </Row>
</Container>
</div>
        
     

    );
}

export default Footer