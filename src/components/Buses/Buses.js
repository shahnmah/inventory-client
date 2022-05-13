import { Button } from 'bootstrap';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Buses = ({ bus }) => {
    const { model, img, dis, price, quantity, suppler, _id } = bus;
    const navigate = useNavigate()
    const navigateToUpdate = id =>{
        navigate(`/updateItem/${id}`)
    }
    return (

        <div className='col-lg-4 col-md-4 col-sm-6 col-12 p-4 gy-4'>
            <div className='border rounded '>
                <img className='img-fluid' src={img} alt="" />
                <div className='p-2'>
                    <h5 className='py-1'>Model: {model}</h5>
                    <p>{dis}</p>
                    <h6>Price: {price} $</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Suppler Name: {suppler}</h6>
                    <button onClick={()=>navigateToUpdate(_id)} className='btn btn-primary px-4 my-2'>Update</button>
                </div>
            </div>
        </div>

    );
};

export default Buses;