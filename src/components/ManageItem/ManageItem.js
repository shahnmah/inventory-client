import React from 'react';
import { Link } from 'react-router-dom';

const ManageItem = ({buses}) => {
    const { model, img, dis, price, quantity, suppler } = buses;
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
                    <button className='btn btn-primary px-4 my-2'>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default ManageItem;