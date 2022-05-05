import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container user-login my-5'>
            <Form className='w-25 mx-auto text-center'>
                <img className='my-3' src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <a role="button" className='text-muted'>Forgot Password ?</a>
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <Button className='w-100 my-3' variant="primary" type="submit">
                    Google Login
                </Button>
                <a role="button" className='text-muted'>Don't have an account ?</a>
            </Form>
        </div>
    );
};

export default Login;