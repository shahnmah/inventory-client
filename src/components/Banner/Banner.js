import React from 'react';
import './banner.css';
const Banner = () => {
    return (
        <div className='banner'>
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div>
                    <h1 className='text-white'>Manage you all Buses</h1>
                    <button className='btn btn-primary'>Manege Buses</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;