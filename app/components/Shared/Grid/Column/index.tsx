import * as styles from './styles';
import React, { useContext } from 'react';
import { cx, css } from 'emotion';
import Count, { CountContextRenderProps } from 'containers/Misc/Contexts/Count';

type ColumnProps = {
  children: React.ReactNode;
  width: number;
  className?: string;
};

const Column: React.SFC<ColumnProps> = ({
  children,
  width,
  className,
}) => {
  const { count } = useContext<CountContextRenderProps>(Count);

  return (
    <div
      className={cx(
        className,
        styles.base,
        css`
          width: ${100 * (width / (count || width))}%;
          flex: 0 0 ${100 * (width / (count || width))};
        `
      )}
    >
      {children}
    </div>
  );
};

export const isColumn = (
  child: React.ReactChild | React.ReactNode
): child is React.ReactElement<ColumnProps> => (
  React.isValidElement(child) && child.type === Column
);

export default Column;
