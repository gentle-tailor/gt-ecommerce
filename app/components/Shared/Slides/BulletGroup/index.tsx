import styled from '@emotion/styled';

type BulletGroupProps = {
  children: React.ReactNode;
};

const BulletGroup = styled('div')<BulletGroupProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 3vw;
  }
`;

export default BulletGroup;
