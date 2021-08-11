import './App.css';
import React,{Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Carousel from './components/CarouselComponent/CarouselComponent'
// import Card from './components/CardComponent/CardComponent';
// import {Button,Row,Container,Col} from 'react-bootstrap';
// import { faCoffee,faCode,faBriefcase,faCar } from '@fortawesome/free-solid-svg-icons'
// import Course from './components/CourseComponent/CourseComponent';
// import course1 from './components/images/course1.png'
// import course2 from './components/images/course2.png'
// import course3 from './components/images/course3.png'
import Faculty from './components/FacultyComponent/FacultyComponent';
// import Blog from './components/BlogComponent/BlogComponent';
// import Testimonial from './components/TestimonialComponent/TestimonialComponent';
// import VisibilitySensor from "react-visibility-sensor";
// import CountUp from 'react-countup';
// import About from './components/AboutComponent/AboutComponent';
import Footer from './components/FooterComponent/FooterComponent';
import HomePage from './components/HomePageComponent/HomePageComponent'
import AboutPage from './components/AboutPageComponent/AboutPageComponent'
import CoursePage from './components/CoursePageComponent/CoursePageComponent'
import FacultyPage from './components/FacultyPageComponent/FacultyPageComponent'
import Contact from './components/ContactComponent/ContactComponent'

class App extends Component {
  // state = {
  //   icon: [faCoffee,faCode,faBriefcase,faCar],

  //   teachers: [
  //   {name: 'ahsan',
  //   position: 'Faculty'},
  //   {name: 'hassan',
  //   position: 'Faculty'},
  //   {name: 'ameer',
  //   position: 'Faculty'},
  //   {name: 'hamza',
  //   position: 'Faculty'},],

  //   courses: [
  //   {course_name: 'Graphic Designing',
  //    reviews: 54,
  //    students: 44,
  //    likes: 67,
  //    fees: '$234'},
  //   {course_name: 'Graphic Designing',
  //    reviews: 54,
  //    students: 44,
  //    likes: 67,
  //    fees: '$234'},
  //   {course_name: 'Graphic Designing',
  //    reviews: 54,
  //    students: 44,
  //    likes: 67,
  //    fees: '$234'},
  //   ],

  //   blogs: [
  //   {headline: 'Footprints in Time is perfect House in Kurashiki',
  //    date: 30,
  //    month: 'Dec'},
  //   {headline: 'Footprints in Time is perfect House in Kurashiki',
  //    date: 30,
  //    month: 'Dec'},
  //   ]
  // }
  render(){
    // const cards =  this.state.icon.map((value,key)=>{
    //         return(
    //           <Card fontawesome_icon={this.state.icon[key]}/>
    //           )
    //       })
    return(
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/courses">
              <CoursePage />
            </Route>
            <Route path="/faculty">
              <FacultyPage />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
  {/*        <Navbar/>
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
              <Course course={this.state.courses[0]} image = {course1} size={4}/> 
              <Course course={this.state.courses[1]} image = {course2} size={4}/> 
              <Course course={this.state.courses[2]} image = {course3} size={4}/> 
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
          <Blog blogs = {this.state.blogs} /> */}
  {/*        <VisibilitySensor partialVisibility offset={{ bottom: 100 }}>
            {({ isVisible }) => (
              <div style={{ height: 100 }}>
                {isVisible ? <CountUp end={1000} duration={6} /> : null}
              </div>
            )}
          </VisibilitySensor>*/}
          <Footer/>
        </div>
      </Router>
      )
  }
}


export default App;
