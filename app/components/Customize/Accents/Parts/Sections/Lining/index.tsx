import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Fabric: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        LINING
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            COLOR
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Fabric;
