import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <FaShoppingCart style={{ fontSize: 25, cursor: 'pointer', color: 'white' }}/>
          </Badge>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
