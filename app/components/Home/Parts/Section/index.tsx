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

const Section = React.forwardRef<HTMLDivElement, SectionProps>((
  {
    children,
    align,
  },
  ref
) => (
  <Inner
    className={cx(
      styles.base,
      css`align-items: ${alignment(align)};`
    )}
    ref={ref}
  >
    {children}
  </Inner>
));

export default Section;
