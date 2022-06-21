import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
height: 190px;
  margin-bottom: 25px;
  margin-top: 25px;

  img {
    width: 40%;
   padding-left: 10px;
    
    align-self: stretch;
   
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
`;

export const ProductAmount = styled.div`
font-size: 14px;
margin: 8px;
width: 8px;
height: 26px;
font-weight: 500;
font-size: 16px;
line-height: 160%;

color: #1D1F22;
`;
export const Remove = styled.div`
border: 1px solid black;


`;
export const Add = styled.div`
border: 1px solid black;
`;
export const ProductAmountContainer = styled.div`
display: flex;

flex-direction: column;
justify-content: space-between;

`;




export const ProductName = styled.span`
font-weight: 300;
font-size: 16px;
line-height: 160%;
color: #1D1F22;
`; 

export const ProductId = styled.span`
font-weight: 300;
font-size: 16px;
line-height: 160%;
color: #1D1F22;
`;



export const ProductPrice = styled.div`
font-size: 16px;
font-weight: 900;
line-heigh: 26px;
color: #1D1F22;

width: 52px;
height: 26px;

`;


export const FilterContainer = styled.div`


`;

export const Filter = styled.div`
display: flex;
align-items: center;
margin-right: 5px;


`;

export const FilterTitle = styled.span`
font-size: 14px;
 

color: #1D1F22;




`;

export const FilterColor = styled.div`
width: 20px;
height: 20px;
margin-top:5px;
background-color: ${props=>props.color};
margin-right: 8px;
cursor: pointer;
&:hover{
  border: 1px solid #5ECE7B;
}

`; 

export const FilterSize = styled.div`
margin-right: 5px;
margin-top: 5px;
margin-bottom: 5px;
padding: 3px 8px;
box-sizing: border-box;
font-weight: 400;
font-size: 14px;
align-items: center;
border: 1px solid #1D1F22;
cursor: pointer;
&:hover{
  background-color:black;
  color: white;
}

`;
