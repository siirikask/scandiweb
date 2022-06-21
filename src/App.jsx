



import { Routes, Route } from 'react-router-dom';

/* import Home from './routes/home/home.component'; */
import Navigation from '../src/routes/navigation/navigation.component';


import Checkout from '../src/routes/checkout/checkout.component';
import Allproducts from './components/Items/all-items.components';
import Productdetail from '../src/components/productdetail/Productdetail';
/* import CartDropdown from './Components/cart-dropdown/cart-dropdown.component'; */

const App = () => {
 
  return (

    
    <Routes>
   
      <Route path='/' element={<Navigation />}>
        <Route path='shop/women' element={<Allproducts />} />
        <Route path='shop/men' element={<Allproducts />}></Route>
        <Route path='shop/kids' element={<Allproducts />}></Route>
        <Route path='checkout' element={<Checkout />} />
        <Route path='/product/:id' element={<Productdetail />} />
        
      
      </Route>
    </Routes>
  );
};

export default App;
