import React from 'react';
import Grid from 'components/Shared/Grid';
import Heading from 'components/Shared/Heading';
import FilterCheck from 'components/Shared/Inputs/FilterCheck';
import Collapsible from '../Collapsible';

const Colors: React.SFC = () => (
  <Collapsible>
    <Heading level={3}>
      COLORS
    </Heading>
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterCheck>
            ALL
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            BLUE
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            BROWN
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterCheck>
            BEIGE
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            GREY
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            YELLOW
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterCheck>
            GREEN
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            BLACK
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            WHITE
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Collapsible>
);

export default Colors;
