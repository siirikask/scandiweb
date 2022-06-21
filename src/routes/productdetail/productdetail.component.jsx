import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
 Container,

} from './checkout.styles';
import Productdetail from '../../components/productdetail/Productdetail';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  
  

  return (
    <Container>
    
      
      {cartItems.map((cartItem) => (
        <Productdetail key={cartItem.id} cartItem={cartItem} />
        
      ))}
      
    
    </Container>
  );
};

export default Checkout;
