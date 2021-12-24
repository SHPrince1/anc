import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from "react-bootstrap";

import "../Styles/About.css"

function Aboutus(){
    return(   
   <div className="Abt">
        <Container fluid="md">
  <Row>
    <Col>
    <h1 className="Abt1">ABOUT US</h1>
    <p>Azogi Nig Coy (ANC) is a multi competency enterprise transformation end technology-consulting firm that combines expertise and capablities across many industries and business functions to deliver superior valve to its clients.
ANC collaborates with its clients, both in the private and public sectors, to build high performance enterprises.</p>
<p>ANC principals and directors have a combined industry experience of over 30 years in various sectors of the economy:
with competence in business transformation, financial advisory, software engineering, communication technology, e-Business
development, government transformations (-Government), systems integration, IT consulting, Logistics and process reengineering.</p>

<p>ANC has deep understanding of the industries it works in, strong technical competencies and an outstanding track record both in the private and public sector. With its tested methodologies and best practices, its dients get best-fit, high-quality
solutions that meet their business demands.
With a flexible organization primed to deliver customized services to its clients,
 ANC goes the extra mile to fully understand its
clients real needs. ANC offers its clients the ability to reinvent themselves and 
remodel their operations and business services using proven business methodologies.</p>
</Col>
  </Row>

  
  <Row>
    <Col> <h3 className="Vmg">VISION</h3>
    <p>To ensure that we provide our best efforts 100% of the time;
     to develop technology solutions that enable our customers to overcome business challenges and improve productivity, 
     thegeby become the foremost enterprise transformation and technology-consulting services firm in Nigeria and Africa.
     </p> </Col>
  
    <Col><h3 className="Vmg">MISSION</h3>
    <p>To provide first-class, unique and premium solutions geared towards meeting the business objectives 
    of clients through the use of appropriate and cost-effective tecnologies.
     </p>
</Col>
    
    <Col>
    <h3 className="Vmg">GOALS & VALUES</h3>
    <p>Two fundamentals objectives guide the operation of our business:</p>
    <ul>
        <li>To use our expertise for the benefit of our clients and partners through an open, collaborative approach.</li>
        <li>To ensure sustainable and profitable long-term growth</li>
       
    </ul>
    </Col>
  </Row>
</Container>

</div>
    )
}

export default Aboutus;