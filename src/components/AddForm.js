import { Form, Button } from "react-bootstrap"

import {ProductContext} from '../contexts/ProductContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addProduct} = useContext(ProductContext);

    const [newProduct, setNewProduct] = useState({
        image:"", name:"", price:"", quantity:"", discription:""
    });

    const onInputChange = (e) => {
        setNewProduct({...newProduct,[e.target.name]: e.target.value})
    }

    const {image, name, price, quantity, discription} = newProduct;

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(image,name, price, quantity, discription);
    }

     return (

        <Form onSubmit={handleSubmit} id='addDressBody'>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Product Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    id='dressName'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="price"
                    placeholder="Product Price *"
                    name="price"
                    value={price}
                    onChange = { (e) => onInputChange(e)}
                    id='dressPrice'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Product Description *"
                    rows={2}
                    name="discription"
                    value={discription}
                    onChange = { (e) => onInputChange(e)}
                    id='dressDescription'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Image URL *"
                    name="image"
                    value={image}
                    onChange = { (e) => onInputChange(e)}
                    id='dressImageURL'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Product Qunatity *"
                    name="quantity"
                    value={quantity}
                    onChange = { (e) => onInputChange(e)}
                    id='dressQuantity'
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" id='addDressButton' block>
                Add New Product
            </Button>
        </Form>

     )
}

export default AddForm;