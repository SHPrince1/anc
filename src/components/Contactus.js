import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {Container, Col, Row} from "react-bootstrap"

import  "../Styles/Contact.css"

function Contactus(){
          


    return(
      <div className="cont">
      <Container>
      <Row>
      <Col sm={8}>
        <p><h4>Write to us</h4></p>
        <div class="container">
  <form action="action_page.php">

   <p> <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </p>
    
    <p><label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </p>

    

    <p><label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." />

    <input type="submit" value="Submit" />
    </p>

  </form>
</div>



     
        </Col>
        
            
        
       
        <Col sm={4}>
        <h2>Address & Contact</h2>
        <p>40 Alafia street,Bishop Aggey Mushin,Lagos Nigeria.</p>
        <p>+234 1 790 8059, +234 802 570 3473</p>
        <p>info@azoginigcoy.com</p>
        
        <h4>Follow us on</h4>
            <div>
              <p> <a href="linkdln.com"> <img src="/images/LINK.PNG"  height= "30px" /> </a>
              <a href="fb.com"> <img src="/images/fb.PNG" height= "30px"  /></a>
              <a href="twitter.com"> <img src="/images/twitterlogo.JFIF" height= "30px"   /> </a>
              </p>
            </div>
        
        </Col>
      </Row>
      </Container>  
      </div>   
    )
}

export default Contactus;