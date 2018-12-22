import React, { Component } from 'react';

import Header from 'components/Header';
interface IndexProps {
  query: Object;
}

export default class Index extends Component<IndexProps> {
  render() {
    return (
      <div>
        <Header>Hello World!</Header>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
