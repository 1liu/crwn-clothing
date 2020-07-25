import { UPDATE_COLLECTIONS } from '../types'

export const updateCollections = (collectionMaps) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionMaps
})
