import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import Header from '../HeaderComponent/HeaderComponent';
import './ContactComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faMobile,faEnvelope } from '@fortawesome/free-solid-svg-icons'


const contact = () => {
  return(
    <div className='contact'>
      <Header name='Contact Us'/>
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <h2>Get in Touch</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control as="textarea" rows={6} placeholder='Enter message' />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control style={{display:'inline',marginRight:'10%',width:'45%'}} type="text" placeholder="Enyer your name" />
                <Form.Control style={{display:'inline',width:'45%'}} type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control type="text" placeholder="Enter Subject" />
              </Form.Group>
              <Button variant="primary" type="submit">
                SEND
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={4}>
            <div className= 'contact-side' >
              <FontAwesomeIcon icon= {faHome}/>
              <h3>Buttonwood, California.</h3><br/>
              <p>heelo</p>
              <FontAwesomeIcon icon= {faMobile}/>
              <h3>Buttonwood, California.</h3><br/>
              <p>heelo</p>
              <FontAwesomeIcon icon= {faEnvelope}/>
              <h3>Buttonwood, California.</h3><br/>
              <p>heelo</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    );
}

export default contact;