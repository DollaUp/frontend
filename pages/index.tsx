import React from 'react';
import axios from 'axios';

interface IndexProps {
  query: Object;
}

export default class Index extends React.Component<IndexProps> {
  static getInitialProps = async () => {
    const res = await axios.get(
      'https://api.iextrading.com/1.0/stock/aapl/book'
    );
    console.log(res.data);
  };

  render() {
    return (
      <div>
        <h2 className="page-header">Main Index!</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
