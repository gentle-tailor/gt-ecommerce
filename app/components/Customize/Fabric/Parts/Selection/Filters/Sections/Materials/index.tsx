import React from 'react';
import Grid from 'components/Shared/Grid';
import Heading from 'components/Shared/Heading';
import FilterCheck from 'components/Shared/Inputs/FilterCheck';
import Collapsible from '../Collapsible';

const Materials: React.SFC = () => (
  <Collapsible>
    <Heading level={3}>
      MATERIALS
    </Heading>
    <Grid>
      <Grid.Column width={3}>
        <FilterCheck>
          ALL
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          LINEN
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          COTTON
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          CORDUROY
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          SEERSUCKER
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          STRETCHY
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          WOOL
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          TWEED
        </FilterCheck>
      </Grid.Column>
      <Grid.Column width={3}>
        <FilterCheck>
          VELVET
        </FilterCheck>
      </Grid.Column>
    </Grid>
  </Collapsible>
);

export default Materials;
