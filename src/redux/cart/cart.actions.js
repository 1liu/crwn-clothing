
import { TOOGLE_CART_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART } from '../types'

export const toogleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
})

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item
})
