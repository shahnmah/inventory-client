import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container my-4 blogs'>
            <h2 className='text-center mb-3'>Welcome to Blogs</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Difference between javascript and nodejs</Card.Title>
                                <Card.Text>
                                    <p>Javascript <br /> ১। জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ । ২। জাভাস্ক্রিপ্ট ফ্রন্ট এন্ডে ব্যাবহার করা হয় </p> 
                                    <p>Node Js <br /> ১। নোড জেএস হলো জাভাস্ক্রিপ্ট  রান টাইম এনভাইরনমেন্ট । ২। নোড জেএস সার্ভার সাইট এ ব্যাবহার করা হয়।  </p> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Differences between sql and nosql databases</Card.Title>
                                <Card.Text>
                                    <p>SQL <br />১।Structured Query Language(SQL) এখানে ডাটা গুলা একটা পূর্ণ স্ট্রাকচার মধ্যে থাকে। ২।SQL ডাটবেজ এর মধ্যে রয়েছে MySQL, PostgreSQL ইত্যাদি ।
</p>
                                    <p>NoSQL <br />১।Not Only SQL(NoSQL) এ ডাটা স্টোর এর ক্ষেত্রে SQL এর তুলনায় বেশি ফ্লেক্সিবল।
                                    ২।NoSQL ডাটবেজ এর মধ্যে রয়েছে MongoDB, Apache Cassandra ইত্যাদি ।
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title> What is the purpose of jwt and how does it work</Card.Title>
                                <Card.Text>
                                   <p>JSON Web Token (JWT) হলো একটি ইউজার অথরাইজেশন সিস্টাম। ইউজার অথরাইজেশন পারপাসে JWT ব্যাবহার করা হয়। ইউজার লগইন করলে তার জন্যে অ্যাক্সেস ও রিফ্রেস টোকেন ইস্যু করা হয়। টোকেনের একটা এক্সপায়ার টাইম থাকে, টাইম এক্সপায়ার হয়ে গেলে ইউজার কে লগআউট করে দেয়া হয়।</p> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </div>
    );
};

export default Blogs;