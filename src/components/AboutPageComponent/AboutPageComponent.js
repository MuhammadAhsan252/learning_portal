import React,{Component} from 'react';
import Testimonial from '../TestimonialComponent/TestimonialComponent';
import About from '../AboutComponent/AboutComponent';
import Header from '../HeaderComponent/HeaderComponent';
import {Container,Row,Col} from 'react-bootstrap';
import './AboutPageComponent.css';

class AboutPage extends Component {
  state = {
    mission: 'Consectetur adipiscing elit, sued do eiusmod tempor ididuntudfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commod viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan la Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.'
  }
  render() {
    return(
      <div className='about_page'>
        <Header name = 'About Us' />
        <Container className='about-container'>
          <h4>Our mission</h4>
          <p>{this.state.mission}</p>
          <h4>Our Vision</h4>
          <p>{this.state.mission}</p>
        </Container>
        <Testimonial/>
        <About/>
      </div>
      );
  }
}

export default AboutPage;