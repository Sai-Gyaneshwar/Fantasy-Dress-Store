import { useState, useEffect} from 'react';
import './productview.css'

const Access = ({product}) => {
  
    // eslint-disable-next-line
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [product])

    return (
        <>
        <div className="card">
      <img src={product.image} className="card__img" alt='{product.name}'/>
      <div className="card__body">
        <h2 className="card__title">{product.name}</h2>
        {/* <p className="card__description">{product.discription}</p> */}
        <h3 className="card__price">{product.price}</h3>
        <button className="card__btn">Add to Cart</button>
      </div>
      </div>
   
        </>
    )
}

export default Access;