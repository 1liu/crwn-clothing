
import { TOOGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM, CLEAR_CART } from '../types'
import { addItemToCart, removeItemFromCart } from './cart.utils'
const INITITAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    case CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}

export default cartReducer;
