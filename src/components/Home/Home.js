import React from 'react';
import useBuses from '../../hooks/useBuses';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Buses from '../Buses/Buses';
import Counter from '../Counter/Counter';

const Home = () => {
    const [buses] = useBuses()
    console.log(buses)
    return (
        <div>
            <Banner></Banner>

            {/* buses  */}
            <div className='container my-5'>
                <h2 className='text-center'>Buses</h2>
                <div className="row">
                    {
                        buses.slice(0, 6).map(bus => <Buses key={bus._id} bus={bus}></Buses>)
                    }
                </div>
            </div>
            <Brands></Brands>
            <Counter></Counter>
        </div>
    );
};

export default Home;