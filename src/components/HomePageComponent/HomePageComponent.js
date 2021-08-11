import React, {Component} from 'react';
import Carousel from '../CarouselComponent/CarouselComponent'
import Card from '../CardComponent/CardComponent';
import {Button,Row,Container,Col} from 'react-bootstrap';
import { faCoffee,faCode,faBriefcase,faCar } from '@fortawesome/free-solid-svg-icons'
import Course from '../CourseComponent/CourseComponent';
import Faculty from '../FacultyComponent/FacultyComponent';
import Blog from '../BlogComponent/BlogComponent';
import Testimonial from '../TestimonialComponent/TestimonialComponent';
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';
import About from '../AboutComponent/AboutComponent';
import {courses} from '../Data/courses';


class HomePage extends Component {
  state = {
    icon: [faCoffee,faCode,faBriefcase,faCar],

    teachers: [
    {name: 'ahsan',
    position: 'Faculty'},
    {name: 'hassan',
    position: 'Faculty'},
    {name: 'ameer',
    position: 'Faculty'},
    {name: 'hamza',
    position: 'Faculty'},],


    blogs: [
    {headline: 'Footprints in Time is perfect House in Kurashiki',
     date: 30,
     month: 'Dec'},
    {headline: 'Footprints in Time is perfect House in Kurashiki',
     date: 30,
     month: 'Dec'},
    ]
  }
  render(){
    const all_courses =  courses.slice(0,3).map((value,key)=>{
            return(
              <Course course={courses[key]} image = {courses[key].image} size={4}/> 
              )
          })
    const cards =  this.state.icon.map((value,key)=>{
            return(
              <Card fontawesome_icon={this.state.icon[key]}/>
              )
          })
    return(
      <div className="App">
        <Carousel />
        <Container style={{marginTop: '5%'}}>
          <Row>
            <span>Popular Online Courses</span>
            <h2>Let's Browse All Categories</h2>
          </Row>
          <Row>
            {cards} 
          </Row>
        </Container>  
        <Container>
          <Row>
            <span>Most Popular Course Of This Week</span>
            <h2>Our Popular Course</h2>
          </Row>
          <Row>
            {all_courses}
          </Row>
          <Row className='course_button'>
            <Col lg={{ span: 4, offset: 4 }}>
                <Button variant="primary" size="lg">
                View All Faculty
              </Button>
            </Col>
          </Row>
        </Container>    
        <Faculty teachers = {this.state.teachers} />
        <About/>
        <Testimonial/>
        <Blog blogs = {this.state.blogs} /> 
{/*        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
          {({ isVisible }) => (
            <div style={{ height: 100 }}>
              {isVisible ? <CountUp end={1000} duration={6} /> : null}
            </div>
          )}
        </VisibilitySensor>*/}
      </div>
      )
  }
}

export default HomePage