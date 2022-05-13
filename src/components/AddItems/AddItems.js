import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItems = () => {
    const [bus, setBus] = useState([])
    const [model, setModel] = useState('')
    const [dis, setDis] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [suppler, setSuppler] = useState('')


    useEffect( ()=>{
        fetch('http://localhost:5000/allbuses')
        .then(res => res.json())
        .then(data => setBus(data))
    },[])

    const handleAddItem = e =>{
        e.preventDefault();
        console.log(model, dis, img, price, quantity, suppler)

        if(bus && model && dis && img && price && quantity && suppler){
            fetch('http://localhost:5000/bus',{
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
        }
        e.target.reset();
    }
    return (
        <div className='container text-center my-4'>
            <h1>Add Items</h1>
            <div className="row">
                <div className="col-12">
                    <Form className='w-50 mx-auto' onSubmit={handleAddItem}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={(e)=>setModel(e.target.value)} placeholder="Model Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={(e)=>setDis(e.target.value)} placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={(e)=>setImg(e.target.value)} placeholder="Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" onChange={(e)=>setPrice(e.target.value)}  placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" onChange={(e)=>setQuantity(e.target.value)} placeholder="Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={(e)=>setSuppler(e.target.value)} placeholder="Suppler Name" />
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