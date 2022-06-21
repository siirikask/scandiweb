import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';


import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CheckoutButton,
  Title,
  Amount,
  Info,
  AllButtons,
  Price,
  TotalText,
  SummaryPrice,
  Container,
 
  
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  

  return (
   
    <CartDropdownContainer>
      <Container>
        
      <Info>
      <Title>My Bag.</Title>
      <Amount>3 items</Amount>
      </Info>
      <CartItems>
      
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <SummaryPrice>
      <TotalText>Total</TotalText>
      <Price>${cartTotal}.00</Price>
      </SummaryPrice>
      <AllButtons>
      <CheckoutButton>VIEW BAG</CheckoutButton>
      <CheckoutButton onClick={goToCheckoutHandler}>CHECKOUT</CheckoutButton>
      </AllButtons>
      </Container>
    </CartDropdownContainer>
    
  );
};

export default CartDropdown;
