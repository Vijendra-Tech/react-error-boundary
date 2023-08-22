import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(`Error occured from component`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return <>There was error with this listing. Go to Home Page</>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
