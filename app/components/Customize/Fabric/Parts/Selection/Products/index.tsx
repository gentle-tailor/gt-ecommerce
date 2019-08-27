import React from 'react';
import CardGrid from 'components/Shared/CardGrid';
import Like from 'components/Shared/Buttons/Like';
import Product from 'components/Shared/Cards/Product';

const Products: React.SFC = () => (
  <CardGrid>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
    <CardGrid.Column>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </CardGrid.Column>
  </CardGrid>
);

export default Products;
