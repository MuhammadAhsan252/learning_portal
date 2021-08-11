import React from 'react';
import {Card,Col} from 'react-bootstrap';
import './CardComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCode } from '@fortawesome/free-solid-svg-icons'

const card = (props) => {
  return(
      <Col sm={6} md={6} lg={4} className='hovering'>
        <Card
          bg="white"
          text="dark"
          style={{ width: '100%' }}
          className="mb-2 "
        >
        <Card.Body>
          <FontAwesomeIcon icon= {props.fontawesome_icon} />
          <Card.Title>Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
          <a href="#">Read More >></a>
        </Card.Body>
      </Card>
      </Col>
    )
}
export default card;