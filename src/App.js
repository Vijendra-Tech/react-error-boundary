import React from 'react';
import './style.css';
import ErrorBoundary from './ErrorBoundary';

export function App() {
  throw new Error('Something went wrong!!');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default function AppErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
