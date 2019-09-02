import styled from '@emotion/styled';

export type BulletProps = {
  active?: boolean;
  onClick: () => void;
};

const Bullet = styled('span')<BulletProps>`
  cursor: pointer;
  border-radius: 50%;
  background: rgb(244,246,247);
  background: linear-gradient(130deg, rgba(244,246,247,1) 12%, rgba(199,191,191,1) 100%);
  width: ${props => (
    props.active
      ? '10px'
      : '8px'
  )};
  height: ${props => (
    props.active
      ? '10px'
      : '8px'
  )};
  opacity: ${props => (
    props.active
      ? '1'
      : '0.4'
  )};
  transition: all 0.3s ;
`;

export default Bullet;
