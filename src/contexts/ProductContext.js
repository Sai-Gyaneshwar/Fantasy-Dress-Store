import {createContext, useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'; 

export const ProductContext = createContext()

const ProductContextProvider  = (props) => {

    const [products, setProducts] = useState([
        {id:uuidv4(),image:"https://images.pexels.com/photos/1983925/pexels-photo-1983925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        , name: 'T-shirt', price: '199',  quantity: '10',discription: 'Brand T-shirt'},
        {id:uuidv4(),image:"https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
        , name: 'Blue Jeans', price: '599',  quantity: '50',discription: 'Jeans For Men'},
        {id:uuidv4(),image:"https://images.unsplash.com/photo-1628030328071-538b251a4455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=373&q=80" 
        , name: 'Branded Hoddies', price: '1999',  quantity: '20',discription: 'Hoddies'}
])

  //local storage
   useEffect(()=> {
       setProducts(JSON.parse(localStorage.getItem('products')))
   },[])

   useEffect(() => {
      localStorage.setItem('products', JSON.stringify(products));
   })



const sortedProducts = products.sort((a,b)=>(a.name < b.name ? -1 : 1));


const addProduct = (image, name, price, quantity, discription) => {
    setProducts([...products , {id:uuidv4(), image, name, price, quantity ,discription}])
}

const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
}

const updateProduct = (id, updatedProduct) => {
    setProducts(products.map((product) => product.id === id ? updatedProduct : product))
}

    return (
        <ProductContext.Provider value={{sortedProducts, addProduct, deleteProduct, updateProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;