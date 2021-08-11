import React from 'react';
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import Course from '../CourseComponent/CourseComponent';
import {Container,Row,Col,Button} from 'react-bootstrap';
import './BlogComponent.css';
const blog = (props) => {
	return(
		<div className='Blog'>
			<Container>
	          <Row>
	            <span>Our Latest News From Our Blog</span>
	            <h2>Latest News From Blog</h2>
	          </Row>
	          <Row>
	            <Course blog={props.blogs[0]} image = {blog1} size={6}/> 
	            <Course blog={props.blogs[1]} image = {blog2} size={6}/>
	          </Row>
	          <Row className='blog_button'>
		          <Col lg={{ span: 4, offset: 4 }}>
	          	    <Button variant="primary" size="lg">
				      View All Blogs
				    </Button>
				  </Col>
	          </Row>	          
			</Container>
		</div>
		)
}

export default blog;