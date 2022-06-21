import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin-top: 90px;
  margin-bottom: 90px;
   margin-inline: auto; 
   width: min(100% - 200px); 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 75px;
  
`;

export const Container = styled.div`
  
`;

export const WrapperItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 386px;
  height: 444px;
  
  position: relative;
  margin-top: 60px;
`;

export const ImgBox = styled.div`
  width: 380px;
  

  
 
 

  
  
`;

export const Img = styled.img`
  width: 100%;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: static;
  height: 29px;
  font-weight: 300;
  margin-top: 15px;
`;

export const Price = styled.div`
  font-weight: 600;
  
`;


export const Box = styled.div`
&:hover{
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19); 
  
  background-color: white;
}
`;

export const BtnWrapper = styled.button`
  position: absolute;
  top: 72%;
  right: 0;
  left: auto;
  cursor: pointer;
  width: 74px;
  background-color: transparent;
  border:none;
`;


export const CategoryTitle = styled.h1`
margin-top: 90px;
  margin-inline: auto;
  width: min(100% - 200px);
  display: flex;
  flex-wrap: wrap;
  
`;