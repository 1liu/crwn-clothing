import {
  //UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from '../types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = (collectionMaps) => ({
  type: FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = (collectionMaps) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMaps
})

export const fetchCollectionFailure = errorMsg => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg
})

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());

    collectionRef.get().then(snapshot => {
      //console.log('snap', snapshot);
      const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
      //updateCollections(collectionsMaps);
      dispatch(fetchCollectionSuccess(collectionsMaps));
      //console.log(collectionsMaps);
    }).catch(error => {
      dispatch(fetchCollectionFailure(error.message));
    })
  }
}
