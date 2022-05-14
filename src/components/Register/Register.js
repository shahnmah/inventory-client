import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    const handleUserRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/login')
    }
    if (googleUser) {
        navigate('/home')
    }
    if (error || googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {googleError?.message}</p>
        </div>
    }
    if(loading || googleLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <div className='container user-login my-5'>
                <Form className='w-50 mx-auto text-center' onSubmit={handleUserRegister}>
                    <img className='my-3 log-img' src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorElement}
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                    <Button onClick={() => signInWithGoogle()} className='w-100 my-3' variant="primary" type="submit">
                        Google Sign Up
                    </Button>
                    <Link className='text-decoration-none' to='/login'>Already have an account ?</Link>
                </Form>
            </div>
        </div>
    );
};

export default Register;