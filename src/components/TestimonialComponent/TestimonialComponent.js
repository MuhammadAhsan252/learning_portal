import React from 'react';
import {Container,Carousel} from  'react-bootstrap';
import './TestimonialComponent.css'
import testimonial1 from '../images/testimonial1.png'
import card2 from '../images/card_img2.jpeg'
import card3 from '../images/card_img3.jpeg'

const testimonial = () => {
	return(
		<div className ='testimonial'>
			<Container>
				<Carousel slide>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={testimonial1}
				      alt="First slide"
				    />
				    <Carousel.Caption>
				      <h5>You can’t succeed if you just do what others do and
						follow the well-worn path. You need to create a new and
						original path for yourself.</h5>
				      <span>Clifford Frazier<span>-Colorlib Themes</span></span>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={testimonial1}
				      alt="Second slide"
				    />

				    <Carousel.Caption>
				      <h5>You can’t succeed if you just do what others do and
						follow the well-worn path. You need to create a new and
						original path for yourself.</h5>
				      <span>Clifford Frazier<span>-Colorlib Themes</span></span>
				    </Carousel.Caption>
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100"
				      src={testimonial1}
				      alt="Third slide"
				    />

				    <Carousel.Caption>
				      <h5>You can’t succeed if you just do what others do and
						follow the well-worn path. You need to create a new and
						original path for yourself.</h5>
				      <span>Clifford Frazier<span>-Colorlib Themes</span></span>
				    </Carousel.Caption>
				  </Carousel.Item>
				</Carousel>
			</Container>
		</div>
		)
}

export default testimonial;