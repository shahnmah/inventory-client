import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div className='container text-center my-4'>
            <h1>Add Items</h1>
            <div className="row">
                <div className="col-12">
                    <Form className='w-50 mx-auto'>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Model Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Description" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Price" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" placeholder="Quantity" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Suppler Name" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddItems;