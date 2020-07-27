import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from './shop/shop.sagas'

export default function* rootSage() {
  yield all([
    //fetchCollectionsStart()
    call(fetchCollectionsStart)
  ])
}
