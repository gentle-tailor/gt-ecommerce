import React from 'react';
import { PATH_SHOP } from 'routes/paths';
import Link from 'components/Shared/Link';
import Preview from 'components/Shared/Callouts/Preview';
import PreviewPrimary from 'components/Shared/Cards/PreviewPrimary';
import PreviewSecondary from 'components/Shared/Cards/PreviewSecondary';
import Heading from 'components/Shared/Heading';
import HeadingAuto from 'components/Shared/HeadingAuto';
import Header from 'components/Home/Parts/Sections/Header';
import Footer from 'components/Home/Parts/Sections/Footer';

const Essentials: React.SFC = () => (
  <React.Fragment>
    <Header align="left">
      <Heading level={2}>
        ESSENTIALS
      </Heading>
    </Header>
    <Preview>
      <Preview.Primary>
        <PreviewPrimary>
          <PreviewPrimary.Media />
          <PreviewPrimary.Meta>
            <HeadingAuto>
              PRIMO
            </HeadingAuto>
          </PreviewPrimary.Meta>
        </PreviewPrimary>
      </Preview.Primary>
      <Preview.Secondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            BRUNICO
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            RAVELLO
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            MADISON
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            CARTESSIO
          </PreviewSecondary.Meta>
        </PreviewSecondary>
      </Preview.Secondary>
    </Preview>
    <Footer align="right">
      <Link to={PATH_SHOP}>
        VIEW ALL...
      </Link>
    </Footer>
  </React.Fragment>
);

export default Essentials;
