import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    return (
        <div className='container user-login my-5'>
            <Form className='w-25 mx-auto text-center'>
                <img className='my-3' src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control  onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Control  onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                </Form.Group>
                
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <Button className='w-100 my-3' variant="primary" type="submit">
                    Google Login
                </Button>
                <Link className='text-decoration-none' to='/register'>Don't have an account ?</Link>
            </Form>
        </div>
    );
};

export default Login;