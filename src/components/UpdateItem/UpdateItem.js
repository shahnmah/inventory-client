import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import './UpdateItem.css'

const UpdateItem = () => {
    const { itemId } = useParams()
    const [bus, setBus] = useState({})
    const [quantity, setQuantity] = useState(0);
    const [currentQuantity,setCurrentQuantity] = useState(0)
    const [reload, setReload] = useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/bus/${itemId}`)
        .then(res => res.json())
        .then(data => setBus(data))
    },[reload])
    const handleUpdateQuantity = () =>{
        const newQuantity = {quantity};
        fetch(`http://localhost:5000/allbuses/${itemId}`, {

            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body:JSON.stringify(newQuantity),
        })
        .then(res=> res.json())
        .then(data => console.log(data))
        setReload(!reload)
    }
    const handleDelivered = () =>{
        console.log(currentQuantity)
    }
    return (
        <div className='container update-container'>
            <h1 className='text-center mt-4'>Update Your Item</h1>
            <div className="row">
                <div className='col-12 p-4 gy-4'>
                    <div className='border rounded '>
                        <img className='img-fluid' src={bus.img} alt="" />
                        <div className='p-2'>
                            <h5 className='py-1'>Model: {bus.model}</h5>
                            <p>{bus.dis}</p>
                            <h6>Price: {bus.price} $</h6>
                            <h6 onBlur={e=> setCurrentQuantity(e.target.value)}>Quantity: {bus.quantity}</h6>
                            <h6>Suppler Name: {bus.suppler}</h6>
                            <div className='quantity-update-container'>
                                <button onClick={handleDelivered} style={{height: '40px'}} className='btn btn-primary py-2 px-5'>Delivered</button>
                                <div className='update-input'>
                                    <input onChange={(e) => setQuantity(e.target.value)} className='mb-2' type="number" placeholder='Update Quantity' name="quantity" id="" /> <br />
                                    <button onClick={handleUpdateQuantity} className='btn btn-primary'>Update Quantity</button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center mt-4 mb-2'>
                            <Link to='/manageItems' role='button' className='btn btn-primary py-2 px-5'>Manage All Buses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;