import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Pants: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        PANTS
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            FIT
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            CUFFS
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            PLEATS
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            FASTENING
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            SLEEVES
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            POCKETS
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Pants;
