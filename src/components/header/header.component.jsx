import React from 'react';
import './header.styles.scss';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.componet';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.reselect';
import { HeaderContainer, LogoContainer,  OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';



const Header = ({ currentUser, hidden, signOutStart }) => (
   <HeaderContainer >
      <LogoContainer to="/">
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer >
         <OptionLink to='/shop'>SHOP</OptionLink>
         <OptionLink  to='/shop'>CONTACT</OptionLink>
         {currentUser ? (<OptionLink as='div'  onClick={signOutStart}>SGIN OUT</OptionLink>)
            : (<OptionLink  to="/signin">SIGN IN</OptionLink>)}
            <CartIcon />
      </OptionsContainer>
      {
         hidden ? null : <CartDropdown/> 
      }
   </HeaderContainer> 
);

const mapStateToPorps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToPorps, mapDispatchToProps)(Header);