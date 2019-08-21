import React from 'react';
import * as R from 'ramda';
import { cx, css } from 'emotion';
import { CountContext } from 'containers/Misc/Contexts/Count';
import { isColumn } from '../Column';

type RowProps = {
  children: React.ReactNode;
  className?: string;
};

const count = R.reduceRight<React.ReactNode, number>(
  (el, acc) => (
    isColumn(el)
      ? el.props.width + acc
      : acc
  ),
  0
);

const Row: React.SFC<RowProps> = ({
  children,
  className
}) => (
  <div
    className={cx(className, css`
      display: flex;
      flex-direction: row;
      width: 100%;
    `)}
  >
    <CountContext.Provider value={{ count: count(React.Children.toArray(children)) }}>
      {children}
    </CountContext.Provider>
  </div>
);

export default Row;
