import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Button: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        BUTTON
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            JACKET
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            PANTS
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Button;
