import React from 'react';
import './FacultyComponent.css'
import {faculty} from '../Data/faculty';
import Course from '../CourseComponent/CourseComponent'

import {Container,Row,Col,Button} from 'react-bootstrap';

const faculty1 = (props) => {
  const all_faculty = faculty.slice(0,4).map((value,key)=>{
          return(
            <Course teacher={faculty[key]} image = {faculty[key].image} size={3}/> 
            )
        })
	return(
		<div className='Faculty'>
			<Container>
	          <Row>
	            <span>Most About Our Faculty</span>
	            <h2>Our Best Teachers</h2>
	          </Row>
	          <Row>
              {all_faculty}
	          </Row>
	          <Row className='faculty_button'>
		          <Col lg={{ span: 4, offset: 4 }}>
	          	    <Button variant="primary" size="lg">
				      View All Faculty
				    </Button>
				  </Col>
	          </Row>	          
			</Container>
		</div>
		)
}

export default faculty1 ;