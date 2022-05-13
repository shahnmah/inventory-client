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
                <Container className='menubar'>
                    <Navbar.Brand href="#home">
                        <Link to='/home'><img src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" /></Link>
                    </Navbar.Brand>
                    <Nav className=" menu">
                        <Link to='/home'>Home</Link>
                        {
                            user ? <Link to='/manageItems'>Manage Items</Link> : <></>
                        }
                        {
                            user ? <Link to='/addItems'>Add Items</Link> : <></>
                        }
                        {
                            user ? <Link to='/myItems'>My Items</Link> : <></>
                        }
                        <Link to="/updateItem">Update</Link>
                        <Link to='/blogs'>Blogs</Link>
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