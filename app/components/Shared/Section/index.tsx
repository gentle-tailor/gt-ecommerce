import React from 'react';
import Level from 'containers/Misc/Contexts/Level';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = React.forwardRef<HTMLDivElement, SectionProps> ((
  {
    children,
    className,
  },
  ref
) => (
  <Level.Consumer>
    {({ level }) => (
      <Level.Provider value={{ level: level + 1 }}>
        <section
          className={className}
          ref={ref}
        >
          {children}
        </section>
      </Level.Provider>
    )}
  </Level.Consumer>
));

export default Section;
