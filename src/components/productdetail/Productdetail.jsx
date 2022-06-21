import styled from "styled-components";

import { CartContext } from '../../contexts/cart.context';
import { useContext } from 'react';
/* import React, { useEffect } from 'react';


import { useDispatch, useSelector } from "react-redux";
import { getProductDetails, clearErrors } from "../../actions/productActions"; */

import product1 from "../../images/product1.png";

import product from "../../components/Items/all-items.components"


const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
width: 20%;
height: 90%;

margin: 0px 20px 20px 20px;`;


const InfoContainer = styled.div`
flex: 4;
padding: 0px 50px;
`;

const Image = styled.img`
width: 90px;
height: 90px;
margin-right: 40px;
margin-bottom: 20px;


`;



const Desc = styled.div`
margin: 20px 0px;
width: 292px;
height: 103px;

`;



const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px 0px;

`;

const Filter = styled.div`
display: flex;
align-items: center;
margin: 5px;

`;

const FilterTitle = styled.span`
font-size: 15px;
font-weight: 700; 
line-weight: 18px;
align-items: center;
color: #1D1F22;
padding-top: 10px;
margin-bottom: 10px;

`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
background-color: ${props=>props.color};
margin-right: 5px;
cursor: pointer;
&:hover{
  border: 1px solid #5ECE7B;
}


`;

const FilterSize = styled.div`
margin-right: 5px;
padding: 7px 18px;
box-sizing: border-box;
font-weight: 400;
font-size: 14px;
line-weight: 18px;
align-items: center;
border: 1px solid #1D1F22;
cursor: pointer;
&:hover{
  background-color:black;
  color: white;
}

`;


const ProductPrice = styled.div`
font-size: 24px;
font-weight: 700;
line-heigh: 24px;
color: #1D1F22;
`;


const ProductName = styled.span`
font-weight: 600;
padding: 0px 0px 20px;
display: flex;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
`;


const ProductId = styled.span`
font-weight: 400;

font-size: 30px;
line-height: 27px;
color: #1D1F22;
`;


const Button = styled.button`
padding: 10px 70px;
background-color: #5ECE7B;
cursor: pointer;
color: white;
margin-top: 20px;
border: none;
width: 292px;
`
;

const PriceTitle = styled.div`
font-size: 15px;
font-weight: 700; 
line-weight: 18px;
align-items: center;
color: #1D1F22;
padding-top: 10px;
margin-bottom: 10px;
`
;

const ImgContainer2 = styled.div`
flex: 3;

`
;
const Image2 = styled.img`

width: 550px;
height: 450px;
margin-right: 40px;

`
;


const Productdetail = (props) => {
 
  const { addItemToCart } = useContext(CartContext);
/* const dispatch = useDispatch();


const { error, product } = useSelector(state => state.productDetails)
useEffect(() => {
  dispatch(getProductDetails(match.params.id))

if(error) 
alert.error(error);
dispatch(clearErrors())

},[dispatch, error, match.params.id]) */

  return (
    <Container>
    
     
      <Wrapper>
        
          <ImgContainer>
          <Image src={product1}/>
          <Image src={product1}/>
          <Image src={product1}/>
          </ImgContainer>
          <ImgContainer2>
          <Image2 src={product1}/>
          </ImgContainer2>
          
          <InfoContainer>
          <ProductName>Appolo</ProductName>
                <ProductId>LALA</ProductId>
                
                
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
              <PriceTitle>PRICE:</PriceTitle>
              <ProductPrice>$30.00</ProductPrice>
            
                <Button onClick={() => addItemToCart(product)}>ADD TO CART</Button>
                
         
              <Desc>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.

              </Desc> 
          </InfoContainer>
          
          </Wrapper>  
    </Container>
  )
}

export default Productdetail
