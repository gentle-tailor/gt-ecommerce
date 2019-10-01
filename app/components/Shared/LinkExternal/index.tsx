import React from 'react';
import useHover from 'hooks/useHover';
import ActiveIndicator from 'components/Shared/ActiveIndicator';

export type LinkExternalProps = {
  children: React.ReactNode;
  href: string;
  target?: string;
  active?: boolean;
};

const LinkExternal = React.forwardRef<HTMLAnchorElement, LinkExternalProps>((
  {
    children,
    href,
    target,
    active = false,
  },
  ref
) => {
  const [hovered, handlers] = useHover();

  return (
    <ActiveIndicator
      active={active || hovered}
      ref={ref}
    >
      <a
        href={href}
        target={target}
        onMouseOver={handlers.onHoverOver}
        onMouseOut={handlers.onHoverOut}
      >
        {children}
      </a>
    </ActiveIndicator>
  );
});

export default LinkExternal;
