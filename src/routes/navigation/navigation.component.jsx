import { Fragment, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';
import { ReactComponent as Shopping } from '../../images/Logo.svg';
/* import{ ReactComponent as Dollar } from '../../images/Dollar.svg'; */

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  ListItem,

 
  Right,
} from './navigation.styles';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const [activeLink, setActiveLink] = useState('w');

  return (
    <Fragment>
    
      <NavigationContainer> 
        <LogoContainer to='/'>
          <Shopping className='logo' />
          
        </LogoContainer>
        <NavLinks>
          <ListItem>
          <NavLink onClick={() => setActiveLink('w')} 
          className={`${activeLink === 'w' ? 'active' : ''}`}
          to='shop/women'>Women</NavLink>
          </ListItem>
          <ListItem>
          <NavLink onClick={() => setActiveLink('m')} 
          className={`${activeLink === 'm' ? 'active' : ''}`} 
          to='shop/men'>Men</NavLink>
          </ListItem>
          <ListItem>
          <NavLink onClick={() => setActiveLink('k')} 
          className={`${activeLink === 'k' ? 'active' : ''}`} 
          to='shop/kids'>Kids</NavLink>
          </ListItem>
        </NavLinks>
       
        <Right>
        
        <CartIcon />
       
        {isCartOpen && <CartDropdown />}
        </Right>
      </NavigationContainer>
      
     
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
// navcontainer = header
//