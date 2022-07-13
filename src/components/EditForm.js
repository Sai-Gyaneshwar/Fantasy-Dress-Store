import { Form, Button } from "react-bootstrap"

import {ProductContext} from '../contexts/ProductContext';
import {useContext, useState} from 'react';

const EditForm = ({theProduct}) =>{

    const id = theProduct.id;

    const [name, setname] = useState(theProduct.name);
    const [price, setprice] = useState(theProduct.price);
    const [discription, setdiscription] = useState(theProduct.discription);
    const [image, setimage] = useState(theProduct.image)
    const [quantity, setquantity] = useState(theProduct.quantity);


    const {updateProduct} = useContext(ProductContext);

    const updatedProduct = {id, image, name, price, discription, quantity}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(id, updatedProduct)
    }

     return (

        <Form onSubmit={handleSubmit} id='editDressBody'>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Product Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> setname(e.target.value)}
                    id='dressName'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="price"
                    placeholder="Product Price"
                    name="price"
                    value={price}
                    onChange={(e)=> setprice(e.target.value)}
                    id='dressPrice'
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Product Description"
                    rows={2}
                    name="discription"
                    value={discription}
                    onChange={(e)=> setdiscription(e.target.value)}
                    id='dressDescription'

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Image URL"
                    rows={3}
                    name="discription"
                    value={image}
                    onChange={(e)=> setimage(e.target.value)}
                    id='dressImageURL'

                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Product Quantity"
                    name="quantity"
                    value={quantity}
                    onChange={(e)=> setquantity(e.target.value)}
                    id='dressQuantity'

                />
            </Form.Group>
            <Button variant="success" type="submit" id='editDressButton' block>
                Edit Product
            </Button>
        </Form>

     )
}

export default EditForm;