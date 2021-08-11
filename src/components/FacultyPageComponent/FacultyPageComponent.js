import React,{Component} from 'react';
import Header from '../HeaderComponent/HeaderComponent';
import {Container,Row,Col,Nav} from 'react-bootstrap';
import {faculty} from '../Data/faculty';
import Course from '../CourseComponent/CourseComponent';
import './FacultyPageComponent.css';

class FacultyPage extends Component {
    state = {
      selected_faculty: faculty.map((value,key)=>{
            return(
              <Course image = {faculty[key].image} teacher ={faculty[key]} size={3}/> 
              )
          })
    }

    filter_category(selectedKey) {
      console.log(selectedKey)
      const all_faculty =  faculty.filter(faculty => faculty.category.includes(selectedKey)).map((value,key)=>{
              return(
                <Course teacher={faculty[key]} image = {faculty[key].image} size={3}/> 
                )
            })
      this.setState({selected_faculty: all_faculty});
    };
  render() {
    return(
      <div className='faculty_page'>
        <Header name = 'Instructors' />
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
            {this.state.selected_faculty}
          </Row>
        </Container>
      </div>
      );
  }
}

export default FacultyPage;