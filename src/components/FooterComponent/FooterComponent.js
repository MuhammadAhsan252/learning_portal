import React from 'react';
import {Container,Row,Col,InputGroup,Button,FormControl} from 'react-bootstrap';
import './FooterComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGoogle,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'


const footer = () => {
	return(
		<div className='footer'>
			<Container>
				<Row>
					<Col sm={12} lg={6}>
					<h4>Stay Updated</h4>
					  <InputGroup className="mb-3">
					    <FormControl
					      aria-label="Example text with button addon"
					      aria-describedby="basic-addon1"
					      placeholder='Your Email Address'
					    />
					    <Button variant="outline-secondary" id="button-addon1">
					      Button
					    </Button>
					  </InputGroup>
					</Col>
					<Col sm={12} lg={6}>
						<h4>Let's Get Social</h4>
						<a href='https://www.youtube.com/' style={{backgroundColor: '#3b5998'}}><FontAwesomeIcon icon= {faFacebook} /></a>
						<a href='https://www.facebook.com/' style={{backgroundColor: '#1da1f2'}}><FontAwesomeIcon icon= {faTwitter} /></a>
						<a href='https://www.youtube.com/' style={{backgroundColor: '#dd4b39'}}><FontAwesomeIcon icon= {faInstagram} /></a>
						<a href='https://www.youtube.com/' style={{backgroundColor: '#bb1500'}}><FontAwesomeIcon icon= {faYoutube} /></a>
						<a href='https://www.youtube.com/' style={{backgroundColor: '#2d3092'}}><FontAwesomeIcon icon= {faGoogle} /></a>

					</Col>
				</Row>
				<Row style={{marginTop: '5%'}}>
					<Col sm={6} lg={3}>
						<h5>About Us</h5>
						<ul className='about' >
							<li><a href='https://www.youtube.com/'>Online Learning</a></li>
							<li><a href='https://www.youtube.com/'>Online Learning</a></li>
							<li><a href='https://www.youtube.com/'>Online Learning</a></li>
							<li><a href='https://www.youtube.com/'>Online Learning</a></li>
						</ul>
					</Col>
					<Col sm={6} lg={3}>
						<h5>About Us</h5>
						<ul className='about' >
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
						</ul>
					</Col>
					<Col sm={6} lg={3}>
						<h5>About Us</h5>
						<ul className='about' >
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
						</ul>
					</Col>
					<Col sm={6} lg={3}>
						<h5>About Us</h5>
						<ul className='about' >
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
              <li><a href='https://www.youtube.com/'>Online Learning</a></li>
						</ul>
					</Col>
				</Row>
			</Container>
		</div>
		)
}

export default footer;