import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

gap: 15px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  background-color: black;
  border-radius: 10px;
  padding: 4px 7px;
  color: white;

  top: 3px;
  right: -10px;
`;

export const Dollar = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

`;
export const Option = styled.div`
display: flex;
flex-direction: column;
font-weight: 500;
font-size: 18px;
line-height: 160%;
text-align: center;
padding: 15px;
&:hover {
  background-color:#EEEEEE;
}
`;
export const Currency = styled.div`

`;
export const CartIcon2 = styled.div`

`;
export const Select = styled.div`
/* display: none; */
align-items: center;
position: absolute;
width: 114px;
height: 169px;
right: 0px;
box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19); 
  
`;
export const CurrencyButton = styled.div`

  
`;