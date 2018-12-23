import React from 'react';
import Link from 'next/link';
import { string } from 'prop-types';

type LinkProps = {
  href: string;
  prefetch?: boolean;
  children: React.ReactNode | string;
};

const NextLink: React.SFC<LinkProps> = ({ href, children, ...props }) => (
  <Link href={href} {...props}>
    <a>{children}</a>
  </Link>
);

NextLink.defaultProps = {
  prefetch: false
};

export default NextLink;
