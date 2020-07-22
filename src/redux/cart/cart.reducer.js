
import { TOOGLE_CART_HIDDEN, ADD_ITEM } from '../types'

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
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
}

export default cartReducer;
