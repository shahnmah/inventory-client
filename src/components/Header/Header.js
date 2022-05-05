import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Link to='/home'>Home</Link>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;