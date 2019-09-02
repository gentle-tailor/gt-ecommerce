import React from 'react';
import { css } from 'emotion';
import { Link, LinkProps } from 'react-router-dom';
import useHover from 'hooks/useHover';
import Hover from 'containers/Misc/Contexts/Hover';

type ContainerProps = (
  LinkProps
);

const Container: React.SFC<ContainerProps> = ({
  children,
  ...rest
}) => {
  const [hovered, handlers] = useHover();

  return (
    <Hover.Provider value={{ hovered }}>
      <Link
        {...rest}
        className={css`width: 100%;`}
        onMouseOver={handlers.onHoverOver}
        onMouseOut={handlers.onHoverOut}
      >
        {children}
      </Link>
    </Hover.Provider>
  );
};

export default Container;
