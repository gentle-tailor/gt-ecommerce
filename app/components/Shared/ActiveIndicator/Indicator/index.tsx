import styled from '@emotion/styled';

type IndicatorProps = {
  active: boolean;
};

const Indicator = styled('span')<IndicatorProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${props => props.active ? '70%' : '0%'};
  border-bottom: 2px solid;
  transition: width 0.25s;

  &:hover {
    width: 70%;
  }
`;

export default Indicator;
