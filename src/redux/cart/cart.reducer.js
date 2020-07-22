
import { TOOGLE_CART_HIDDEN } from '../types'

const INITITAL_STATE = {
  hidden: true
}

const cartReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case TOOGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state;
  }
}

export default cartReducer;
