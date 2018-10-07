import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar>
            <Navbar.Header >
              <Navbar.Brand>
                <Link to='/'>Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} to="/aboutme" href="/aboutme">
                    About 
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} to='/resume' href="/resume">
                    Resume
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} to='/projects' href="/projects">
                    Projects
                </NavItem>
                <NavItem eventKey={4} componentClass={Link} to='/contact' href="/contact">
                    Contact
                </NavItem>
              </Nav>
            </Navbar.Collapse>  
          </Navbar>
        </div>
        
    );
  }
}



export default Navigation;
