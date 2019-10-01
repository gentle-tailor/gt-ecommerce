import React from 'react';
import useHover from 'hooks/useHover';
import { Link as InnerLink, LinkProps as InnerLinkProps } from 'react-router-dom';
import ActiveIndicator from 'components/Shared/ActiveIndicator';

export type LinkProps = (
  InnerLinkProps &
  {
    active?: boolean;
  }
);

const Link = React.forwardRef<HTMLSpanElement, LinkProps>((
  {
    active = false,
    ...rest
  },
  ref
) => {
  const [hovered, handlers] = useHover();

  return (
    <ActiveIndicator
      active={active || hovered}
      ref={ref}
    >
      <InnerLink
        {...rest}
        onMouseOver={handlers.onHoverOver}
        onMouseOut={handlers.onHoverOut}
      />
    </ActiveIndicator>
  );
});

export default Link;
