import React from 'react';
import Container from './Container';
import Filters from './Filters';
import Products from './Products';

const Selection: React.SFC = () => (
  <Container>
    <Filters />
    <Products />
  </Container>
);

export default Selection;
