// This is the landing page of the application
// If logged in, you should redirect to `/home`

import React from 'react';

interface IndexProps {
  query: {
    [name: string]: string | string[] | undefined;
  };
}

export default class Index extends React.Component<IndexProps> {
  render() {
    return (
      <div>
        <h2 className="page-header">Main Index!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
