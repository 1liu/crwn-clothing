import React, { useEffect } from 'react'
import { connect } from 'react-redux'
//import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'

//import CollectionOverview from '../../components/collections-overview/collections-overview.component'
//import CollectionPage from '../collection/collection.component'

//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionStart } from '../../redux/shop/shop.actions'
//import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../../pages/collection/collection.container'
//import WithSpinner from '../../components/with-spinner/with-spinner.component'

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ShopPage = ({ fetchCollectionStart, match }) => {

  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`}
        component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`}
        component={CollectionsPageContainer} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

/* const mapStateToProps = createStructuredSelector({
  selectIsCollectionLoaded: selectIsCollectionLoaded
}) */

export default connect(null, mapDispatchToProps)(ShopPage);
