import React,{Component} from 'react';
import Header from '../HeaderComponent/HeaderComponent';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import './CoursePageComponent.css';
import {courses} from '../Data/courses';
import Course from '../CourseComponent/CourseComponent';

class CoursePage extends Component {
    state = {
      selected_courses: courses.map((value,key)=>{
            return(
              <Course course={courses[key]} image = {courses[key].image} size={4}/> 
              )
          })
    }

    filter_category(selectedKey) {
      console.log(selectedKey)
      const all_courses =  courses.filter(course => course.category.includes(selectedKey)).map((value,key)=>{
              return(
                <Course course={courses[key]} image = {courses[key].image} size={4}/> 
                )
            })
      this.setState({selected_courses: all_courses});
    };
  render() {
    return(
      <div className='course_page'>
        <Header name = 'All Courses' />
        <Nav className="justify-content-center" activeKey="/home"
          onSelect={(selectedKey) => this.filter_category(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="All">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Web">Web</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Graphic">Graphic</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Language">
              Language
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Container>
          <Row>
            {this.state.selected_courses}
          </Row>
        </Container>
      </div>
      );
  }
}

export default CoursePage;