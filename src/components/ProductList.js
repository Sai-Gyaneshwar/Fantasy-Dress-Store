import { Modal, Button, Alert} from 'react-bootstrap';
import {useContext, useEffect, useState } from 'react';
import {ProductContext} from '../contexts/ProductContext';
import Product from './Product';
import AddForm from './AddForm';
import Pagination from './Pagination';
import './table.css';

const ProductList = () => {

    const {sortedProducts} = useContext(ProductContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(()=> {
            setShowAlert(false);
        }, 2000)
    }

    useEffect(() => {
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [sortedProducts])

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPagesNum = Math.ceil(sortedProducts.length / productsPerPage);


    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Product List</h2>
            </div>
            <div className="col-sm-6">
                <Button onClick={handleShow} className="btn btn-success" id='addDressButton' data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Product</span></Button>					
            </div>
        </div>
    </div>

    <Alert show={showAlert} variant="success">
        Product List Updated Succefully!
    </Alert>

    <table className="table table-striped table-hover" id='adminDashboard'>
        <thead>
            <tr>
                <th>Image</th>
                <th>Dress Name</th>
                <th>Price</th>  
                <th>Quantity</th>
                {/* <th>discription</th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  currentProducts.map(product => (
                      <tr key={product.id}>
                          {/* <img src={product.image} alt='images' width="70px" height="70px"/> */}
                        <Product product={product} />   
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>

    <Pagination pages = {totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentProducts ={currentProducts}
                sortedProducts = {sortedProducts} />

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Product
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <AddForm />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    </>
    )
}

export default ProductList;