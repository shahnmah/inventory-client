import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UpdateItem = () => {
    const { itemId } = useParams()
    const [bus, setBus] = useState({})
    // useEffect(()=>{
    //     fetch(`http://localhost:3000/updateItem/${itemId}`)
    //     .then(res => res.json())
    //     .then(data => setBus(data))
    // },[])
    fetch(`http://localhost:5000/bus/${itemId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(data => setBus(data));


    return (
        <div className='container w-50'>
            <h1 className='text-center mt-4'>Update Your Item</h1>
            <div className="row">
                <div className='col-12 p-4 gy-4'>
                    <div className='border rounded '>
                        <img className='img-fluid' src={bus.img} alt="" />
                        <div className='p-2'>
                            <h5 className='py-1'>Model: {bus.model}</h5>
                            <p>{bus.dis}</p>
                            <h6>Price: {bus.price} $</h6>
                            <h6>Quantity: {bus.quantity}</h6>
                            <h6>Suppler Name: {bus.suppler}</h6>
                            <div className='d-flex justify-content-between'>
                                <button style={{height: '40px'}} className='btn btn-primary py-2 px-5'>Delivered</button>
                                <div>
                                    <input className='mb-2' type="number" name="quantity" id="" /> <br />
                                    <button className='btn btn-primary'>Update Quantity</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;