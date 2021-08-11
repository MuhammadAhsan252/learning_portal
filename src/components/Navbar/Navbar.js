import React from 'react';
import './Navbar.css'
import {Navbar,Nav,NavDropdown,Container,Form,FormControl,Button,InputGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const navbar = (props) => {

  const linkStyle = {
    textDecoration: "none",
    color: 'rgb(9, 26, 35)',
    fontWeight: '700',
    display: 'block',
    fontSize: '16px'
  };
	return(
		<div className='nav-comp'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
            alt=""
            src={logo}
            width="100"
            height="50"
            className="d-inline-block align-top"
          />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to='/' style ={linkStyle}>Home</Link></Nav.Link>
              <Nav.Link><Link to='/about' style ={linkStyle}>About</Link></Nav.Link>
              <Nav.Link><Link to='/courses' style ={linkStyle}>Courses</Link></Nav.Link>
              <Nav.Link><Link to='/faculty' style ={linkStyle}>Faculty</Link></Nav.Link>
              <Nav.Link><Link to='/contact-us' style ={linkStyle}>Contact</Link></Nav.Link>
            </Nav>
            <Form className="d-flex" style={{position: 'relative'}}>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <FontAwesomeIcon style={{position: 'absolute',top: '25%',right: '5%'}} icon= {faSearch}/>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
		</div>

		)
}

export default navbar;