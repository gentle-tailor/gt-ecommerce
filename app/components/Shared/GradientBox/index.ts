import styled from '@emotion/styled';

type GradientBoxProps = {
  className?: string;
};

const GradientBox = styled('div')<GradientBoxProps>`
  background: rgb(251,251,251);
  background: linear-gradient(130deg, rgba(251,251,251,1) 10%, rgba(247,238,238,1) 100%);
`;

export default GradientBox;
