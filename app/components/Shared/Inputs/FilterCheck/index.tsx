import React from 'react';
import Container from './Container';
import Check from './Check';
import Label from './Label';

type FilterCheckProps = {
  children: React.ReactNode;
  check?: boolean;
};

const FilterCheck: React.SFC<FilterCheckProps> = ({
  children,
}) => (
  <Container>
    <Check />
    <Label>
      {children}
    </Label>
  </Container>
);

export default FilterCheck;
