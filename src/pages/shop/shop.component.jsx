import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Route } from 'react-router-dom'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

//import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'
//import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsPageContainer from '../../pages/collection/collection.container'
//import WithSpinner from '../../components/with-spinner/with-spinner.component'

// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {


  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`}
          component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer} />} />
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

/* const mapStateToProps = createStructuredSelector({
  selectIsCollectionLoaded: selectIsCollectionLoaded
}) */

export default connect(null, mapDispatchToProps)(ShopPage);
