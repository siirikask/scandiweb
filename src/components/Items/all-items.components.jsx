import product1and5 from "../../images/product1.png";
import productTwo from "../../images/product2.png";
import product3and6 from "../../images/product6.png";
import product4 from "../../images/product4.png";
import { ReactComponent as GreenBtn } from "../../images/circle-icon.svg";
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';


import {
  Wrapper,
  WrapperItem,
  Box,
  ImgBox,
  Img,
  Title,
  CategoryTitle,
  Price,
  BtnWrapper,
  Container,
} from './all-items.styles';
import { useContext } from 'react';

const Allproducts = () => {
  const products = [
    {
      id: "product1",
      imageUrl: product1and5,
      name: "Apollo man sweater",
      price: 50,
    },
    {
      id: "product2",
      imageUrl: productTwo,
      name: "Apollo sweater",
      price: 100,
    },
    {
      id: "product3",
      imageUrl: product3and6,
      name: "Apollo dress",
      price: 30,
    },
    {
      id: "product4",
      imageUrl: product4,
      name: "T-shirt for kid",
      price: 30,
    },
    {
      id: "product5",
      imageUrl: product1and5,
      name: "Apollo sweater",
      price: 80,
    },
    {
      id: "product6",
      imageUrl: product3and6,
      name: "Apollo dress",
      price: 70,
    },
  ];

  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/product/:id');
  };
  return (
    <Container>
      <CategoryTitle>Category name</CategoryTitle>
    <Wrapper >
      {products.map(product => (
        <WrapperItem key={product.id}>
          <Box  id={product.id}>
            <ImgBox  onClick={goToCheckoutHandler}>
              <Img src={product.imageUrl} alt='/'></Img>
            </ImgBox>
            <Title>{product.name}</Title>
            <Price>${product.price}.00</Price>
          </Box>
          <BtnWrapper>
            <GreenBtn
              onClick={() => addItemToCart(product)}>
            </GreenBtn>
          </BtnWrapper>
        </WrapperItem>
      ))}
    </Wrapper>
    </Container>
  );
};

export default Allproducts;