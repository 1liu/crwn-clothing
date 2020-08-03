import React from 'react'
import {ErrorImageContainer, ErrorImageText, ErrorImageOverlay} from './error-boundary.styles'
class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {

    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.log(error);

  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/g3hgqe8.png'/>
          <ErrorImageText>Sorry, something went wrong</ErrorImageText>
        </ErrorImageOverlay>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
