import React from 'react'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import CartItem from '../cart-item/cart-item.component'

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toogleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
})
const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
