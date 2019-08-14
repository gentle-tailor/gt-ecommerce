import React from 'react';
import Primary from 'components/Shared/Callouts/Primary';
import Description from 'components/Shared/Callouts/Description';
import HeadingAuto from 'components/Shared/HeadingAuto';

const Featured: React.SFC = () => (
  <React.Fragment>
    <Primary>
      <Primary.Media />
      <Primary.Meta>
        <Description>
          <HeadingAuto>
            NEW IN
          </HeadingAuto>
        </Description>
      </Primary.Meta>
    </Primary>
    <span>
      EXPLORE OUR COLLECTION
    </span>
  </React.Fragment>
);

export default Featured;
