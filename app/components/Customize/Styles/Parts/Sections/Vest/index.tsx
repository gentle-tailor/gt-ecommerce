import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Vest: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        VEST
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            VEST
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Vest;
