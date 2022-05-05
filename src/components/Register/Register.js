import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayError, setDisplayError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate()
      const handleUserRegister = e =>{
          e.preventDefault();
          createUserWithEmailAndPassword(email, password)
      }
      if(user){
          navigate('/login')
      }
      if(error){
         const  errorMessage = error.message;
          setDisplayError(errorMessage)
      }
    return (
        <div>
            <div className='container user-login my-5'>
                <Form className='w-25 mx-auto text-center' onSubmit={handleUserRegister}>
                    <img className='my-3' src="https://i.ibb.co/mhLPrwR/logo-bus-removebg-preview.png" alt="" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control  onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                        <Form.Control  onBlur={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
                    </Form.Group>
                    <p>{displayError}</p>
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button>
                    <Button className='w-100 my-3' variant="primary" type="submit">
                        Google Login
                    </Button>
                    <Link className='text-decoration-none' to='/login'>Don't have an account ?</Link>
                </Form>
            </div>
        </div>
    );
};

export default Register;