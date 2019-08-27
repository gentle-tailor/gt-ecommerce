import React from 'react';
import ProductSelection from 'components/Shared/Cards/ProductSelection';
import CardGrid from 'components/Shared/CardGrid';
import Heading from 'components/Shared/Heading';
import Header from '../Header';

const Jacket: React.SFC = () => (
  <React.Fragment>
    <Header align="center">
      <Heading level={2}>
        JACKET
      </Heading>
    </Header>
    <CardGrid>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            STYLE
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
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
            LAPELS
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
            BACK
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
      <CardGrid.Column>
        <ProductSelection>
          <ProductSelection.Media>
            CHEST
          </ProductSelection.Media>
        </ProductSelection>
      </CardGrid.Column>
    </CardGrid>
  </React.Fragment>
);

export default Jacket;
