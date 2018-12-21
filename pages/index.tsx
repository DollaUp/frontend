import React, { Component } from 'react';

interface Props {
  query: Object;
}

export default class Index extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
