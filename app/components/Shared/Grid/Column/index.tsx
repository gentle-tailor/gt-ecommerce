import React, { useContext } from 'react';
import { cx, css } from 'emotion';
import { CountContext, CountContextRenderProps } from 'containers/Misc/Contexts/Count';

type ColumnProps = {
  children: React.ReactNode;
  width: number;
  className?: string;
};

const Column: React.SFC<ColumnProps> = ({
  children,
  width,
  className
}) => {
  const { count } = useContext<CountContextRenderProps>(CountContext);
  console.log(count, 'huh');

  return (
    <div
      className={cx(className, css`
        display: inline-block;
        width: ${100 * (width / (count || width))}%;
        flex: 0 0 ${100 * (width / (count || width))};
        padding: 0 10px 20px 10px;
      `)}
    >
      {children}
    </div>
  );
}

export const isColumn = (
  child: React.ReactChild | React.ReactNode
): child is React.ReactElement<ColumnProps> => (
  React.isValidElement(child) && child.type === Column
);


export default Column;
