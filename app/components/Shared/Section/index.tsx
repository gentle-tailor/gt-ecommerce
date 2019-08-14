import React from 'react';
import { LevelConsumer, LevelProvider } from 'containers/Misc/Contexts/Level';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section: React.SFC<SectionProps> = ({
  children,
  className,
}) => (
  <LevelConsumer>
    {({ level }) => (
      <LevelProvider value={{ level: level + 1 }}>
        <section className={className}>
          {children}
        </section>
      </LevelProvider>
    )}
  </LevelConsumer>
);

export default Section;
