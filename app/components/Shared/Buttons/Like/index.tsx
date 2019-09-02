import React from 'react';
import Heart from 'assets/heart.svg';
import Button from './Button';

type LikeProps = {
  count: number;
  status?: 'like' | 'unlike';
  onClick?: () => void;
};

const Like: React.SFC<LikeProps> = ({
  count,
  onClick,
}) => (
  <Button onClick={onClick}>
    <Heart />
    <span>
      {count}
    </span>
  </Button>
);

export default Like;
