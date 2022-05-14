import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddItems.css'

const AddItems = () => {
    const [bus, setBus] = useState([])
    const [model, setModel] = useState('')
    const [dis, setDis] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [suppler, setSuppler] = useState('')
    useEffect( ()=>{
        fetch('https://peaceful-tor-07624.herokuapp.com/allbuses')
        .then(res => res.json())
        .then(data => setBus(data))
    },[])
    const clear = () =>{
        setModel('')
        setDis('')
        setDis('')
        setImg('')
        setPrice('')
        setSuppler('')
        setSuppler('')
    }
    const handleAddItem = e =>{
        e.preventDefault();
        if(bus && model && dis && img && price && quantity && suppler){
            fetch('https://peaceful-tor-07624.herokuapp.com/bus',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                  },
                  body: JSON.stringify({model, dis, img, price, quantity, suppler})
            })
           .then(res => res.json())
          toast.success("Item Added Successfully")
        }
        else{
            toast.error("Please Full Fill All Field")
            e.target.reset();
        }
        e.target.reset();
        clear()
    }
    return (
        <div className='container text-center my-4 add-item'>
            <h1>Add Items</h1>
            <div className="row add-item-container">
                <div>
                    <Form onSubmit={handleAddItem}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="model" onBlur={(e)=>setModel(e.target.value)} placeholder="Model Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="dis" onBlur={(e)=>setDis(e.target.value)} placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="img" onBlur={(e)=>setImg(e.target.value)} placeholder="Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" name="price" onBlur={(e)=>setPrice(e.target.value)}  placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" name="quantity" onBlur={(e)=>setQuantity(e.target.value)} placeholder="Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" name="suppler" onBlur={(e)=>setSuppler(e.target.value)} placeholder="Suppler Name" />
                        </Form.Group>
                        <Button variant="primary" type="submit py-2 px-5">
                            Add Item
                        </Button>
                    </Form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default AddItems;