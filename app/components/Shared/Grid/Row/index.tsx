import * as styles from './styles';
import React from 'react';
import * as R from 'ramda';
import { cx } from 'emotion';
import { isColumn } from '../Column';
import Count from 'containers/Misc/Contexts/Count';

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
  className,
}) => (
  <div className={cx(className, styles.base)}>
    <Count.Provider value={{ count: count(React.Children.toArray(children)) }}>
      {children}
    </Count.Provider>
  </div>
);

export default Row;
