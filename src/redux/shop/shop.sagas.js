import { takeLatest, call, put } from 'redux-saga/effects'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { FETCH_COLLECTIONS_START } from '../types'
import {
  fetchCollectionSuccess,
  fetchCollectionFailure
} from './shop.actions'

export function* fetchCollectionsAsync() {
  yield console.log('Im fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }

  // collectionRef.get().then(snapshot => {
  //   //console.log('snap', snapshot);
  //   const collectionsMaps = convertCollectionsSnapshotToMap(snapshot);
  //   //updateCollections(collectionsMaps);
  //   dispatch(fetchCollectionSuccess(collectionsMaps));
  //   //console.log(collectionsMaps);
  // }).catch(error => {
  //   dispatch(fetchCollectionFailure(error.message));
  // })

}

export function* fetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync)
}
