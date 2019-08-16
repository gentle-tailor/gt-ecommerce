import styled from '@emotion/styled';

type SliderProps = {
  children: React.ReactNode;
  panelCount: number;
  activeIndex: number;
}

const Slider = styled('div')<SliderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  min-width: ${({ panelCount }) => 100 * (panelCount || 1)}%;
  transform: translate(-${({ panelCount, activeIndex }) => (100 / panelCount) * activeIndex || 0}%, 0);
  transition: transform 0.4s;
  transition-timing-function: cubic-bezier(.99,.08,.39,.98);

  & > * {
    width: ${({ panelCount }) => 100 /(panelCount || 1)}% !important;
  }
`;

export default Slider;
