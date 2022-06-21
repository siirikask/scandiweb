import styled from 'styled-components';


export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 325px;
  height: 677px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: #FFFFFF;
  top: 78px;
 left: 1043px;
  z-index: 5;

  
`;
export const Info = styled.div`
 display: flex;
 font-size: 16px;
 color: #1D1F22;
text-align: right;
width: 118px;
height: 26px;
margin-top: 15px;

  
`;

export const Container = styled.div`
 
  
`;


export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
`;

export const CheckoutButton = styled.button`
background-color: white;
padding: 16px 40px;





&:hover {
  background: #5ECE7B;
  color: white;}

`;

export const Amount = styled.button`
  display: flex;
  border: none;
 background-color: white;
`;
export const Title = styled.button`
  display: flex;
  border: none;
  background-color: white;
  font-weight: 600;
  margin-right: 5px;
`;

export const AllButtons = styled.div`
position: absolute;
/* width: 95px;
height: 26px;
left: 294px;
top: 510px; */
top: 620px;
gap: 20px;

display: flex;
/* display: flex;
box-sizing: border-box;

 justify-content: space-between;
align-items: center;
padding: 16px 32px;
top: 910px; */




`;
export const SummaryPrice = styled.div`


`;
export const Price = styled.div`
position: absolute;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 160%;

width: 95px;
height: 26px;
left: 290px;
top: 550px;

display: flex;
align-items: center;
text-align: right; 

color: #1D1F22;

`;
export const TotalText = styled.div`
position: absolute;
width: 55px;
height: 19px;

top: 550px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;


color: #1D1F22;

`;
