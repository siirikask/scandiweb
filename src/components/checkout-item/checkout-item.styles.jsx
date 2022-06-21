import styled from 'styled-components';


export const ImageContainer = styled.div`
  width: 20%;
  padding-right: -70px;
  padding-left: 20px;

  img {
    width: 70%;
    height: 100%;
    
  }
`;



export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export const ProductAmountContainer = styled.div`
display: flex;

flex-direction: column;
justify-content: space-between;
padding: 5px;
`;

export const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
align-items: center;
text-align: center;`;

export const Add = styled.div`
border: 1px solid black;


`;

export const Remove = styled.div`
border: 1px solid black;


`;

export const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
export const ProductName = styled.span`
font-weight: 600;
margin-top: -25px;
padding: 10px 0px;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
`;

export const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;

`;
export const ProductId = styled.span`
font-weight: 400;
padding: 10px 0px;
font-size: 30px;
line-height: 27px;
color: #1D1F22;
`;



export const ProductPrice = styled.div`
font-size: 24px;
font-weight: 700;
line-heigh: 24px;
color: #1D1F22;

`;

export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px 0px;

`;
export const FilterSize = styled.div`
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
export const Filter = styled.div`
display: flex;
align-items: center;
margin: 5px;

`;

export const FilterTitle = styled.span`
font-size: 15px;
font-weight: 700; 
line-weight: 18px;
align-items: center;
color: #1D1F22;
padding-top: 10px;
margin-bottom: 10px;



`;

export const FilterColor = styled.div`
width: 20px;
height: 20px;
background-color: ${props=>props.color};
margin-right: 5px;
cursor: pointer;
margin-bottom: -25px;
&:hover{
  border: 1px solid #5ECE7B;
}

`;
 
export const Container = styled.div`

`;

export const Wrapper = styled.div`
margin-left: 40px;
margin-right: 60px; 

`;

export const Info = styled.div`
flex: 3;
`;



export const Bottom = styled.div`
/* display: flex;
justify-content: space-between; */`;

export const Product = styled.div`
display: flex;
justify-content: space-between;
margin-right: -80px;
`;


 






export const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
margin: 15px;
`;



export const Texttotal = styled.div`
font-weight: 500px`; 

