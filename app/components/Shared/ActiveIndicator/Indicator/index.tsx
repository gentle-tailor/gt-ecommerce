import styled from '@emotion/styled';

type IndicatorProps = {
  active: boolean;
};

const Indicator = styled('div')<IndicatorProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: ${props => props.active ? '70%' : '0%'};
  height: 100%;
  padding-bottom: 1.1rem;
  border-bottom: 2px solid;
  transition: width 0.25s;

  &:hover {
    width: 70%;
  }
`;

export default Indicator;
