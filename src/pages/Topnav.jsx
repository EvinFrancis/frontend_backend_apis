import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Topnav() {
  return (
    <div>
      <Navbar bg="dark"  style ={{padding: '10px'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Student Registration</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#addstudent">Add Student</Nav.Link>
            <Nav.Link href="#display">Display students</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <style>
        {
          `.nav-link {
            color: #fff;
            font-weight: bold;
            margin-right: 10px;
          }`
        }
      </style>
    </div>
  )
}

export default Topnav
