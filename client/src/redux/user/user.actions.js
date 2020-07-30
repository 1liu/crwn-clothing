import {
  //SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  EMAIL_SIGN_UP_START,
  EMAIL_SIGN_UP_SUCCESS,
  EMAIL_SIGN_UP_FAILURE
  // EMAIL_SIGN_IN_SUCCESS,
  // EMAIL_SIGN_IN_FAILURE
} from '../types'

/* export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
}); */

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

/* export const googleSignInSuccess = user => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = (error) => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: error
}); */

export const emailSignInStart = emailAndPassword => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

/* export const emailSignInSuccess = user => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = (error) => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: error
});
 */

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION
})

export const signOutStart = () => ({
  type: SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error
})

export const emailSignUpStart = (emailAndPasswordAndDisplayName) => ({
  type: EMAIL_SIGN_UP_START,
  payload: emailAndPasswordAndDisplayName
})

export const emailSignUpSuccess = ({ user, additionalData }) => ({
  type: EMAIL_SIGN_UP_SUCCESS,
  payload: { user, additionalData }
})

export const emailSignUpFailure = (error) => ({
  type: EMAIL_SIGN_UP_FAILURE,
  payload: error
})
