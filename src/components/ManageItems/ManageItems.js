import React, { useEffect, useState } from 'react';
import useBuses from '../../hooks/useBuses';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [buses, setBuses] = useBuses()

    // useEffect( ()=>{
    //     fetch('http://localhost:5000/allbuses')
    //     .then(res => res.json())
    //     .then(data => setAllBuses(data))
    // },[])
    return (
        <div>
              <div className='container my-5'>
                <h2 className='text-center'>Manage All Buses</h2>
                <div className="row">
                    {
                        buses.map(buses => <ManageItem key={buses._id} buses={buses}></ManageItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;