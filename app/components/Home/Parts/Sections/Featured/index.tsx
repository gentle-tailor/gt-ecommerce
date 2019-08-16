import React from 'react';
import Callout from 'components/Shared/Callouts/Featured';
import Description from 'components/Shared/Callouts/Description';
import HeadingAuto from 'components/Shared/HeadingAuto';

const Featured: React.SFC = () => (
  <React.Fragment>
    <Callout>
      <Callout.Media />
      <Callout.Meta>
        <Description>
          <HeadingAuto>
            NEW IN
          </HeadingAuto>
        </Description>
      </Callout.Meta>
    </Callout>
    <span>
      EXPLORE OUR COLLECTION
    </span>
  </React.Fragment>
);

export default Featured;
