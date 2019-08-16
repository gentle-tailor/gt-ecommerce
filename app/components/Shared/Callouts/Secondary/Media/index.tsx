import { isValidElement } from 'react';
import styled from '@emotion/styled';
import GradientBorder from 'components/Shared/GradientBorder';

type MediaProps = {
  align?: 'left' | 'right';
  mode?: 'wire' | 'bald';
};

const Media = styled(GradientBorder)<MediaProps>`
  position: absolute;
  width: 460px;
  height: 100%;
  ${props => (
    props.mode === 'bald' &&
    'border: 0 !important;'
  )}
  ${props => (
    props.align === 'left'
      ? 'left: 0;'
      : 'right: 0;'
  )}
`;

export const isMedia = (child: React.ReactChild): child is React.ReactElement<MediaProps> => (
  isValidElement(child) && child.type === Media
);

export default Media;
