import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  Title,
  Wrapper,
  Summary,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
  

} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  
  

  return (
    <CheckoutContainer>
      <Wrapper>
      <CheckoutHeader>
    
      <Title>CART</Title>
        
          
        
      </CheckoutHeader>
      
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        
      ))}
      
      <Summary>
      
        <SummaryItem>
          
            <SummaryItemText>Tax 21%:</SummaryItemText>
            <SummaryItemPrice>$42</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>Quantity:</SummaryItemText>
            
            <SummaryItemPrice>2</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
        <SummaryItemText>Total:</SummaryItemText>
            <SummaryItemPrice>${cartTotal}</SummaryItemPrice>
        </SummaryItem>
        <SummaryButton>ORDER</SummaryButton>
    </Summary>
      </Wrapper>
    </CheckoutContainer>
  );
};

export default Checkout;
