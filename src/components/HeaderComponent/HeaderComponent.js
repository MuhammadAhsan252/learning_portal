import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './HeaderComponent.css';


const header = (props) => {
  return(
    <div className='header'>
      <Container>
        <Row>
          <h1>{props.name}</h1>
        </Row>
      </Container>
    </div>
    );
}

export default header;