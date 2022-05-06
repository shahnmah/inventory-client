import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="ms-auto menu">
                        <Link to='/home'>Home</Link>
                        {
                            user ? <Link to='/'>Manage Items</Link> : <></>
                        }
                        {
                            user ? <Link to='/'>Add Items</Link> : <></>
                        }
                        {
                            user ? <Link to='/'>My Items</Link> : <></>
                        }
                        <Link to='/blog'>Blog</Link>
                        {
                            user ? <Link onClick={() => signOut(auth)} to='/login'>Log Out</Link> : <Link to='/login'>Login</Link>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;