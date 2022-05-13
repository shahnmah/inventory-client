import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useBuses from '../../hooks/useBuses';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Buses from '../Buses/Buses';
import Counter from '../Counter/Counter';

const Home = () => {
    const [buses, setBuses] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:5000/bus')
        .then(res => res.json())
        .then(data => setBuses(data))
    },[])
    return (
        <div>
            <Banner></Banner>

            {/* buses  */}
            <div className='container my-5'>
                <h2 className='text-center'>Buses</h2>
                <div className="row">
                    {
                        buses.map(bus => <Buses key={bus._id} bus={bus}></Buses>)
                    }
                </div>
                <div className='d-flex justify-content-center'>
                <Link to='/manageItems' className='btn btn-primary py-2 px-3'>Manage All Buses</Link>
                </div>
            </div>
            <Brands></Brands>
            <Counter></Counter>
        </div>
    );
};

export default Home;