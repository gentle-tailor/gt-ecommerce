import React from 'react';
import Grid from 'components/Shared/Grid';
import Heading from 'components/Shared/Heading';
import FilterCheck from 'components/Shared/Inputs/FilterCheck';
import Collapsible from '../Collapsible';

const Patterns: React.SFC = () => (
  <Collapsible>
    <Heading level={3}>
      PATTERNS
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
            PLAIN
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            CHECKED
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterCheck>
            HOUNDSTOOTH
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            STRIPED
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            PAISLEY
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <FilterCheck>
            HERRINGBONE
          </FilterCheck>
        </Grid.Column>
        <Grid.Column width={3}>
          <FilterCheck>
            OTHER
          </FilterCheck>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Collapsible>
);

export default Patterns;
