import { createElement } from 'react';

export type HeadingProps = {
  children: React.ReactNode;
  level?: number;
  className?: string;
};

const Heading: React.SFC<HeadingProps> = ({
  children,
  level = 2,
  ...rest
}) => createElement(
  `h${Math.min((level || 1), 6)}`,
  rest,
  children
);

export default Heading;
