/* import React from 'react';
import styled from 'styled-components';


import { ReactComponent as Cart } from "../images/Cart.svg";
import { ReactComponent as Dollar } from "../images/Dollar.svg";

import { ReactComponent as Logo } from "../images/Logo.svg";
const Container = styled.div`
margin-top: 10px;
margin-left: 30px;
margin-right: 30px;
`;
const CartIcon = styled.div`
cursor: pointer;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align_items: center;
justify-content: space-between;

`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`

const Currency = styled.span`
font-size: 14px;
cursor: pointer;
`


const Center = styled.div`
position: relative;

`;
const CompanyLogo = styled.div`

width: 2rem;
position: absolute;
top: 50%;
transform: translateY(-50%);

`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 20px;

`





const MenuItem = styled.div`
font-size: 16px;
cursor: pointer;
margin-left: 25px;
font-weight: 600;
line-weight: 19.2px;
&:hover{
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
    border-bottom-spacing: 30px;
   
    
  
  }
`
 
/* const Navbar = () => {
  return (
    
        <Container>
            <Wrapper>
                <Left>
                    
                    <MenuItem>WOMEN</MenuItem>  
                <MenuItem>MAN</MenuItem>  
                <MenuItem>KIDS</MenuItem> 
                    
                </Left>
                <Center>
                   <CompanyLogo><Logo/></CompanyLogo>
                    </Center>
                <Right>
                <Currency><Dollar/></Currency>
               
                <CartIcon><Cart/></CartIcon>
                </Right>

            </Wrapper>
        </Container>

  )
}

export default Navbar */
