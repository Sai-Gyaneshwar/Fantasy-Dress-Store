import {Alert} from 'react-bootstrap';
import {useContext, useEffect, useState} from 'react';
import {ProductContext} from './contexts/ProductContext';
import Access from './Access';
import './productview.css';

const ProductView = () => {

    const {sortedProducts} = useContext(ProductContext);

    const [showAlert, setShowAlert] = useState(false);

    //eslint-disable-next-line no-unused-vars
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    //const handleShowAlert = () =>setShowAlert(true);

    const [currentPage] = useState(1);
    const [productsPerPage] = useState(1000)

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
   

    return (
    <>

    <Alert show={showAlert} variant="success">
        Product List Updated Succefully!
    </Alert>

        <div className='row'>
                {
                  currentProducts.map(product => (
                      <div className='column' key={product.id}>
                        <Access product={product} /> 
                    </div>
                  ))  
                }
        </div>                


    </>
    )
}

export default ProductView;