import React, { useCallback } from 'react';
import * as R from 'ramda';
import useSlide from 'hooks/useSlide';
import Bullet from 'components/Shared/Bullet';
import BulletGroup from './BulletGroup';
import PanelGroup from './PanelGroup';
import Container from './Container';

type SlidesProps = {
  children: React.ReactNode;
};

const Slides: React.SFC<SlidesProps> = ({
  children,
}) => {
  const count = React.Children.count(children);
  const [curr, setIndex] = useSlide({ min: 0, max: count });

  return (
    <Container>
      <PanelGroup
        activeIndex={curr}
        panelCount={count}
      >
        {children}
      </PanelGroup>
      <BulletGroup>
        {R.repeat(Bullet, count).map((B, next) => (
          <B
            key={`bullet_${next}`}
            active={next === curr}
            onClick={useCallback(R.thunkify(setIndex)(next), [])}
          />
        ))}
      </BulletGroup>
    </Container>
  );
};

export default Slides;
