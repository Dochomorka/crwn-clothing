import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {connect} from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.componet';

const Header = ({ currentUser, hidden }) => (
   <div className='header'>
      <Link to="/" className='logo-container'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/shop'>SHOP</Link>
         <Link className='option' to='/shop'>CONTACT</Link>
         {currentUser ? <div className='option' onClick={() => auth.signOut()}>SGIN OUT</div>
            : <Link className='option' to="/signin">SIGN IN</Link>}
            <CartIcon />
      </div>
      {
         hidden ? null : <CartDropdown/> 
      }
   </div> 
);

const mapStateToPorps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser: currentUser,
    hidden: hidden
});

export default connect(mapStateToPorps)(Header);