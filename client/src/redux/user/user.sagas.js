import { takeLatest, put, all, call, take } from 'redux-saga/effects'
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  EMAIL_SIGN_UP_START,
  EMAIL_SIGN_UP_SUCCESS,
  SIGN_IN_SUCCESS
} from '../types'
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  emailSignUpSuccess,
  emailSignUpFailure
} from './user.actions'

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser
} from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {

    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({
      id: userSnapshot.id,
      ...userSnapshot.data()
    }))
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut)
}

export function* signUpWithEmail({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    //yield createUserProfileDocument(user, { displayName });

    yield put(emailSignUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(emailSignUpFailure(error));
  }
}

export function* onEmailSignUpStart() {
  yield takeLatest(EMAIL_SIGN_UP_START, signUpWithEmail);
}

export function* onEmailSignUpSuccess() {
  yield takeLatest(EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {

  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onEmailSignUpStart),
    call(onEmailSignUpSuccess)
  ])
}
