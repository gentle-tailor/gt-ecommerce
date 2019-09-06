import * as styles from './styles';
import React from 'react';
import { cx, css } from 'emotion';

type SliderProps = {
  children: React.ReactNode;
  panelCount: number;
  activeIndex: number;
  className?: string;
};

const Slider: React.SFC<SliderProps> = ({
  children,
  className,
  panelCount,
  activeIndex,
}) => (
  <div
    className={cx(
      className,
      styles.base,
      css`
        min-width: ${100 * (panelCount || 1)}%;
        transform: translate(-${(100 / panelCount) * activeIndex || 0}%, 0);
        transition: transform 0.3s;
        transition-timing-function: cubic-bezier(.99,.08,.39,.98);

        & > * {
          width: ${100 / (panelCount || 1)}% !important;
        }
      `
    )}
  >
    {children}
  </div>
);

export default Slider;
