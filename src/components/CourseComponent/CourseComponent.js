import React from 'react';
import {Card,Col,Button} from 'react-bootstrap';
import course1 from '../images/course1.png'
import './CourseComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faUser,faHeart} from '@fortawesome/free-solid-svg-icons'


const course = (props) => {
	let instructor = <span style={{display: 'none'}}></span>
	let course = <span style={{display: 'none'}}></span>
	let blog = <span style={{display: 'none'}}></span>
	let blog_date = <span style={{display: 'none'}}></span>
		if (typeof props.teacher != 'undefined') {
			instructor = <Card.Body className='instructor'>
					<h3><a href='#'>{props.teacher.name}</a></h3>
					<p>{props.teacher.position}</p>
				  </Card.Body>;
				  console.log(instructor);
		}

		if (typeof props.course != 'undefined') {
		  	course = <Card.Body>
					  	<h4>{props.course.course_name}</h4>
					    <FontAwesomeIcon icon= {faStar} />
					    <FontAwesomeIcon icon= {faStar} />
					    <FontAwesomeIcon icon= {faStar} />
					    <FontAwesomeIcon icon= {faStar} />
					    <span className='right'>{props.course.reviews} Reviews</span>
					    <br />
					    <Card.Text>
					    <FontAwesomeIcon icon= {faUser} />
					    <span className='font_margin'>{props.course.students}</span>
					    <FontAwesomeIcon icon= {faHeart} />
					    <span className='font_margin'>{props.course.likes}</span>
					    <span className='right'>{props.course.fees}</span>
					    </Card.Text>
					  </Card.Body>;
		}


		if (typeof props.blog != 'undefined') {
		  	blog = <Card.Body>
				  	<p>| Properties</p>
				  	<h4>{props.blog.headline}</h4>
				  	<a>Read More >></a>
				  </Card.Body>;

			blog_date = <div className='block'>
							<h3>{props.blog.date}</h3>
							<p>{props.blog.month}</p>
						</div>
		}

	return(
			<Col sm={6} md={6} lg={props.size} className='course'>
		    	<Card style={{ width: '100%',marginBottom: '10%' }}>
				  <Card.Img variant="top" src={props.image} />
				  <Card.ImgOverlay variant='top'>
				  	{blog_date}
				  </Card.ImgOverlay>
				  {blog}
				  {course}
				  {instructor}
				</Card>
			</Col>
		)
}

export default course;