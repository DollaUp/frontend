// This is the login page of the application

import React from 'react';

interface LoginProps {
  query: {
    [name: string]: string | string[] | undefined;
  };
}

/**
 * TODO:
 * * graphql mutation to sign up or log in a user
 * * form components to switch between signing up & logging in
 */

export default class Login extends React.Component<LoginProps> {
  render() {
    return (
      <div>
        <h2 className="page-header">Application Login!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
