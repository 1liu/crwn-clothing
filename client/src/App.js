import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component.jsx'
import CheckoutPage from './pages/checkout/checkout.component'

//import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
//import { auth, createUserProfileDocument } from './firebase/firebase.utils'
//import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import './App.css';

const App = ({ checkUserSession, currentUser }) => {

  //unsubscribeFromAuth = null;

  //componentDidMount() {
  //const { setCurrentUser, collectionsArray } = this.props;
  //const { checkUserSession } = this.props;
  //checkUserSession();
  /* this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //console.log(userAuth);
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
        //console.log(this.state)
      })
    }
    setCurrentUser(userAuth);
    //one time use for adding store data to firestore
    //addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })));
  }) */
  //}

  /*   componentWillUnmount() {
      this.unsubscribeFromAuth();
    } */

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);


    return (
      <div className="">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
          <Route exact spath='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
