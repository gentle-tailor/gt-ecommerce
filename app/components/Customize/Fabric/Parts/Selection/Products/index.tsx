import React from 'react';
import Grid from 'components/Shared/Grid';
import Like from 'components/Shared/Buttons/Like';
import Product from 'components/Shared/Cards/Product';

const Products: React.SFC = () => (
  <Grid>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
    <Grid.Column width={3}>
      <Product>
        <Product.Media />
        <Product.Meta>
          <Like count={50} />
          <span>
            $129.99
          </span>
        </Product.Meta>
      </Product>
    </Grid.Column>
  </Grid>
);

export default Products;
