// This is the home page of the application

import React from 'react';

interface HomeProps {
  query: {
    [name: string]: string | string[] | undefined;
  };
}

/**
 * TODO:
 * * graphql query to fetch user's watchlists
 * * IEX queries to fetch user's watchlists' data
 */

export default class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <h2 className="page-header">Application Home!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
