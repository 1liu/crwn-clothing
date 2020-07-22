
import { TOOGLE_CART_HIDDEN, ADD_ITEM } from '../types'

export const toogleCartHidden = () => ({
  type: TOOGLE_CART_HIDDEN
})

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
})
