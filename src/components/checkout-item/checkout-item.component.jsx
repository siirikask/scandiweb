import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import plus  from '../../images/plus.png';
import minus  from '../../images/minus.png';

import {
  Wrapper,
  Hr,
  Bottom,
  Info,
  Product,
  ImageContainer,
  Container,
  RemoveButton,
  ProductAmount,
  ProductAmountContainer,
  Remove,
  Add,
  ProductDetail,
  Details,
  ProductName,
  ProductId,
  ProductPrice,
  FilterContainer,
  FilterTitle,
  Filter,
  FilterSize,
  FilterColor,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);

  return (
      <Container>
      
      <Wrapper>
<Hr/>
<Bottom>
<Info>
  <Product>
      <ProductDetail>
      <Details>
          <ProductName>{name}</ProductName>
          <ProductId>{name}</ProductId>
          
          <ProductPrice>${price}</ProductPrice>
          <FilterContainer>
          <FilterTitle>
              SIZE:
            </FilterTitle>
    
            <Filter>
              <FilterSize>XS</FilterSize>
              <FilterSize>S</FilterSize>
              <FilterSize>M</FilterSize>
              <FilterSize>L</FilterSize>
              </Filter>

          <FilterTitle>
              COLOR:
            </FilterTitle>
            <Filter>
           
            <FilterColor color="lightgray"/>
            <FilterColor  color="black"/>
            <FilterColor color="green"/>
            </Filter>
        </FilterContainer>
      </Details>
  </ProductDetail>
  <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton> 
      <ProductAmountContainer>
      <Add  onClick={addItemHandler}> <img  src={plus} alt="Plus"/></Add>
      <ProductAmount>{quantity}</ProductAmount>
      <Remove onClick={removeItemHandler}><img  src={minus} alt="Minus"/></Remove>
  </ProductAmountContainer>
 
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      </Product>
  
   
  
 
  </Info>
  </Bottom>
  <Hr/>
 
</Wrapper>

    </Container>

    
  );
};

export default CheckoutItem;
