import styled from '@emotion/styled';

type CheckProps = {
  className?: string;
}

const Check = styled('div')<CheckProps>`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgb(251,251,251);
  background: linear-gradient(130deg, rgba(251,251,251,1) 10%, rgba(247,238,238,1) 100%);
`;

export default Check;
