import React from 'react';
import _isUndefined from 'lodash/isUndefined';
import _isEmpty from 'lodash/isEmpty';
import Link from 'next/link';

type ErrorProps = {
  error?: {
    status: number;
    statusText?: string;
    hide?: boolean;
    component?: React.ReactNode;
    info?: {
      title: string;
      description?: string;
      redirect?: {
        text: string;
        href:
          | string
          | {
              pathname: string;
              query?: {
                [q: string]: string | string[] | undefined;
              };
            };
      };
    };
  };
  children: React.ReactNode;
};

export default class ErrorWrapper extends React.Component<ErrorProps> {
  render() {
    const { children, error } = this.props;
    if (!(_isUndefined(error) || _isEmpty(error))) {
      const { hide, component } = error;
      if (hide) {
        if (!_isUndefined(component)) return component;
      } else {
        const { info } = error;
        if (_isUndefined(info)) return null;

        const { title, description, redirect } = info;
        return (
          <div>
            <h2 className="page-header">{title}</h2>
            {!(_isUndefined(description) || _isEmpty(description)) && (
              <p>{description}</p>
            )}
            {!(_isUndefined(redirect) || _isEmpty(redirect)) && (
              <div>
                <Link href={redirect.href}>
                  <button>{redirect.text || 'Go Back'}</button>
                </Link>
              </div>
            )}
          </div>
        );
      }
    }
    return children;
  }
}
