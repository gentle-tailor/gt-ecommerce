import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Signature: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        SIGNATURE
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            TEXT
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            TEXT COLOR
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            FONT
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Signature;
