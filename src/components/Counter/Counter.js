import React from 'react';
import './Counter.css'
import NumberCounter from 'number-counter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faWarehouse, faUsers, faUserCheck } from '@fortawesome/free-solid-svg-icons'
const Counter = () => {
    return (
        <div className="counter my-5">
            <div className='container text-center text-white'>
                <div className="row py-5">
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2 text-primary' icon={faWarehouse}></FontAwesomeIcon>
                        <h2><NumberCounter end={500} delay={2}/></h2>
                        <h5>Buses in stock</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2 text-primary' icon={faBus}></FontAwesomeIcon>
                        <h2><NumberCounter end={450} delay={2}/></h2>
                        <h5>Buses Sold</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2 text-primary' icon={faUsers}></FontAwesomeIcon>
                        <h2><NumberCounter end={350} delay={2}/></h2>
                        <h5>Customers</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2 text-primary' icon={faUserCheck}></FontAwesomeIcon>
                        <h2><NumberCounter className="d-inline-block" end={100} delay={2}/><span className='ms-2'>%</span></h2>
                        <h5>Customer Satisfaction</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;