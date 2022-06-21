import { useContext } from 'react';
import { useState } from 'react';

import { ReactComponent as ShoppingIcon } from '../../images/Cart.svg';

import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
   ItemCount,
   Option,
   Select,
   CartIcon2,
   Currency,
   CurrencyButton,
   } from './cart-icon.styles';

import{ ReactComponent as Dollar } from '../../images/Dollar.svg';
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  
const [ toggle, setToggle ] = useState(true);
  return (
    <CartIconContainer >
     <Currency>
     <CurrencyButton onClick={() => setToggle(!toggle)}><Dollar /></CurrencyButton>
      { toggle && (
      <Select>
        <Option>$ USD</Option>
        <Option>EUR</Option>
        <Option>JPY</Option>
  
</Select>
)}
</Currency>
<CartIcon2 onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
      </CartIcon2>
    </CartIconContainer>

  );
};

export default CartIcon;
