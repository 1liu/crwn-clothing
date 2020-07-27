import { all, call } from 'redux-saga/effects'

import { fetchCollectionsStart } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
export default function* rootSage() {
  yield all([
    //fetchCollectionsStart()
    call(fetchCollectionsStart),
    call(userSagas)
  ])
}
