import React from 'react';
import {Carousel,Container,Row,Col,Button} from 'react-bootstrap'
import card1 from '../images/card_img1.jpeg'
import card2 from '../images/card_img2.jpeg'
import card3 from '../images/card_img3.jpeg'
import './CarouselComponent.css';

const carousel = () => {
	return(
		<div style={{backgroundColor:'#ADD8E6'}}>
      <Container>
        <Row>
          <Col sm={12} md={7}>
            <div className='carousel-component' >
              <span>Popular Online Courses</span>
              <h1>The New Way To Learn Properly in With Us!</h1>
              <Button variant="primary">Primary</Button>
            </div>
          </Col>
          <Col className='carousel-comp' md={5} >
          </Col>
        </Row>
      </Container>
		</div>
		)
}

export default carousel;