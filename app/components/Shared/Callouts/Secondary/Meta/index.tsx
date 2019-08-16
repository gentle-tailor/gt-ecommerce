import { isValidElement } from 'react';
import styled from '@emotion/styled';

type MetaProps = {
  children: React.ReactNode;
  align?: 'left' | 'right';
};

const Meta = styled('div')<MetaProps>`
  position: absolute;
  z-index: 1;
  transform: translate(0, 75%);
  ${props => (
    props.align === 'right'
      ? 'right: 0'
      : 'left:  0'
  )}
`;

export const isMeta = (child: React.ReactChild): child is React.ReactElement<MetaProps> => (
  isValidElement(child) && child.type === Meta
);

export default Meta;
