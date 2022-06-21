import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 100px;
`;

export const LogoContainer = styled(Link)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(50%);
  width: 32px;

  &.logo {
    width: 100%;
  }
`;

export const NavLinks = styled.ul`
display: flex;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const Currency = styled.div`

`;

export const Right = styled.div`
  
`;

/* export const NavLink = styled`
  line-height: 19px;
  padding: 0 32px 17px;
  text-transform: uppercase;
  font-size: 16px;
  color: var(--black);
  text-decoration: none;

  &:hover {
    transform: scale(1.014);
    color: rgba(94, 206, 123, 1);
    border-bottom: 1px solid var(--green);
  }
`; */

export const NavLink = styled(Link)`
  line-height: 19px;
  padding: 0 32px 17px;
  text-transform: uppercase;
  font-size: 16px;
  color: var(--black);

  &.active {
    color: rgba(94, 206, 123, 1);
    border-bottom: 1px solid var(--green);
  }

  &:hover {
    transform: scale(1.014);
  }
`;


