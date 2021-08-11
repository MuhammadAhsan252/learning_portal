import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './AboutComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'

import { faLightbulb,faGraduationCap,faClipboardList,faUserTie,faCode } from '@fortawesome/free-solid-svg-icons'

const about = () => {
	return(
		<div className='about'>
			<Container>
				<Row>
					<Col sm={12} md={6}>
						<span>More about our company</span>
						<h2>Want to know more</h2>
						<p>There arge many variations ohf passages of sorem gpsum ilable, 
						but the majority have suffered alteration in some form, 
						by ected humour, or randomised words whi.</p>
						<ul>
							<li>
								<FontAwesomeIcon icon= {faLightbulb} />
								 Creative ideas base
							</li>
							<li>
								<FontAwesomeIcon icon= {faUserTie} />
								  Assages of sorem gpsum ilable
							</li>
							<li>
								<FontAwesomeIcon icon= {faGraduationCap} />
								 Have suffered alteration in so
							</li>
							<li>
								<FontAwesomeIcon icon= {faClipboardList} />
								  Randomised words whi
							</li>
						</ul>

					</Col>
					<Col sm={12} md={6}>
						<img src={about1} className='img1' alt="First slide" />
						<img src={about2} style={{marginTop: '5%'}} className='img2' alt="First slide" />	
					</Col>
				</Row>
			</Container>
		</div>
		)
}

export default about;