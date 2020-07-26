import {
  UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../types'

const INITIAL_STATE = {
  isFeaching: false,
  collections: null,
  errorMessage: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFeaching: true
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFeaching: false,
        collections: action.payload
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFeaching: false,
        errorMessage: action.payload

      }
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer
