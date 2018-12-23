import React from 'react';

interface IndexProps {
  query: Object;
}

export default class Index extends React.Component<IndexProps> {
  render() {
    return (
      <div>
        <h2 className="page-header">App Index!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
