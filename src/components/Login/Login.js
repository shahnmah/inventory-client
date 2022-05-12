import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const handleUserLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    if (user || googleUser) {
        navigate(from, { replace: true });

    }
    if (error || googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {googleError?.message}</p>
        </div>
    }
    if(loading || googleLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    const handleForgotPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter Your Email First')
            const emailInput = document.getElementById('email-input')
            const value = emailInput.value;
            emailInput.style.outline = "1px solid red";
        }
    }
    return (
        <div className='container user-login my-5'>
            <Form className='w-25 mx-auto text-center' onSubmit={handleUserLogin}>
                <img className='my-3' src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control id='email-input' onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Control onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    <p><small onClick={handleForgotPassword} className='text-muted' role='button'>Forgot Password</small></p>
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                {errorElement}
                <Button onClick={() => signInWithGoogle()} className='w-100 my-3' variant="primary" type="submit">
                    Google Login
                </Button>
                <Link className='text-decoration-none' to='/register'>Don't have an account ?</Link>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;