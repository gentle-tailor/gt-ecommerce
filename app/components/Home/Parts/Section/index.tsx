import * as styles from './styles';
import React from 'react';
import * as R from 'ramda';
import { cx, css } from 'emotion';
import Inner from 'components/Shared/Section';

type SectionProps = {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
};

const alignment = R.cond([
  [R.equals('left'), R.always('flex-start')],
  [R.equals('right'), R.always('flex-end')],
  [R.T, R.always('center')],
]);

const Section: React.SFC<SectionProps> = ({
  children,
  align,
}) => (
  <Inner
    className={cx(
      styles.base,
      css`align-items: ${alignment(align)};`
    )}
  >
    {children}
  </Inner>
);

export default Section;
