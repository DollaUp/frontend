// This is the landing page of the application
// If logged in, you should redirect to `/home`

import React from 'react';

interface ErrorProps {
  query: {
    [name: string]: string | string[] | undefined;
  };
}

export default class Error extends React.Component<ErrorProps> {
  render() {
    return (
      <div>
        <h2 className="page-header">Main Error!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
