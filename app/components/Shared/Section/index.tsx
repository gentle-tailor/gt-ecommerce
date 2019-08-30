import React from 'react';
import Level from 'containers/Misc/Contexts/Level';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.SFC<SectionProps> = ({
  children,
  className,
}) => (
  <Level.Consumer>
    {({ level }) => (
      <Level.Provider value={{ level: level + 1 }}>
        <section className={className}>
          {children}
        </section>
      </Level.Provider>
    )}
  </Level.Consumer>
);

export default Section;
