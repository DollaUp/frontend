import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import _isEmpty from 'lodash/isEmpty';
import _toUpper from 'lodash/toUpper';

import Container from './styles';

export default class QuoteSearch extends React.Component {
  state = {
    quote: ''
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    const search = _toUpper(value);
    this.setState({
      quote: search
    });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { quote } = this.state;
    const search = _toUpper(quote);
    if (event.key === 'Enter') {
      Router.push(
        {
          pathname: '/q',
          query: {
            quote: search
          }
        },
        `/q/${search}`
      );
    }
  };

  render() {
    const { quote } = this.state;
    const search = _toUpper(quote);
    return (
      <Container>
        <input
          type="text"
          value={search}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <Link
          href={{
            pathname: '/q',
            query: {
              quote: search
            }
          }}
          as={`/q/${search}`}
        >
          <button disabled={_isEmpty(quote)}>Search</button>
        </Link>
      </Container>
    );
  }
}
