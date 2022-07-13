import ProductList from './components/ProductList';
import ProductContextProvider from './contexts/ProductContext';
import ProductView from './productview';


function App() {
  return (
     <div className="container-xl">
       <div className="table-responsive">
         <div className="table-wrapper">
           <ProductContextProvider>
              <ProductView >
                <div className='row'></div>
             </ProductView> 
             <br/>
             <br/>
             <br/>
             <br/>
               <ProductList/> 
           </ProductContextProvider>
         </div>
       </div>
     </div>
  );
}

export default App;
