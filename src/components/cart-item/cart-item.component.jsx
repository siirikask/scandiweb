import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import 
{ CartItemContainer,
   ItemDetails,
   ProductAmountContainer,
   Add,
   ProductAmount,
   Remove,
   ProductName,
   ProductId,
ProductPrice,
FilterContainer,
FilterSize,
FilterTitle,
Filter,
FilterColor,

   } from './cart-item.styles';

   import plus from '../../images/plus.png';
   import minus from '../../images/minus.png';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemToCart } = useContext(CartContext);

const addItemHandler = () => addItemToCart(cartItem);
const removeItemHandler = () => removeItemToCart(cartItem);
  return (
  
    <CartItemContainer>
     
      <ItemDetails>
        <ProductName>{name}</ProductName>
          <ProductId>{name}</ProductId>
          
          <ProductPrice>${quantity * price}</ProductPrice>
          <FilterContainer>
          <FilterTitle>
              Size:
            </FilterTitle>
    
            <Filter>
              <FilterSize>XS</FilterSize>
              <FilterSize>S</FilterSize>
              <FilterSize>M</FilterSize>
              <FilterSize>L</FilterSize>
              </Filter>

          <FilterTitle>
              Color:
            </FilterTitle>
            <Filter>
           
            <FilterColor color="lightgray"/>
            <FilterColor  color="black"/>
            <FilterColor color="green"/>
            </Filter>
        </FilterContainer>
      </ItemDetails>
  
          
      
      <ProductAmountContainer>
      <Add  onClick={addItemHandler}> <img  src={plus} alt="Plus"/></Add>
      <ProductAmount>{quantity}</ProductAmount>
      <Remove onClick={removeItemHandler}><img  src={minus} alt="Minus"/></Remove>
  </ProductAmountContainer>
      <img src={imageUrl} alt={`${name}`} />
     
    </CartItemContainer>
    
   

  );
};

export default CartItem;

