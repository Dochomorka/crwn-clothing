import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux';
import { clearItemFromCart , addItem, removeItem} from '../../redux/cart/cart.actions';
import RemoveCircleOutlineOutlinedIcon from '@material-ui/icons/RemoveCircleOutlineOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const  {name, imageUrl, price, quantity} = cartItem;

   return (<div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" className="" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <span>
                <div className="arrow" onClick={() => removeItem(cartItem)}>
                    <ArrowBackIosOutlinedIcon/>
                </div>
            </span>
            <span className="value">{quantity}</span>
            <span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    <ArrowForwardIosOutlinedIcon/>
                </div>
            </span>
            </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItem)}>
            <RemoveCircleOutlineOutlinedIcon/>
        </span>
    </div>)
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);