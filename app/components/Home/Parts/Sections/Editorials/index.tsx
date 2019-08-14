import React from 'react';
import Preview from 'components/Shared/Callouts/Preview';
import PreviewPrimary from 'components/Shared/Cards/PreviewPrimary';
import PreviewSecondary from 'components/Shared/Cards/PreviewSecondary';
import Heading from 'components/Shared/Heading';
import HeadingAuto from 'components/Shared/HeadingAuto';
import Header from 'components/Home/Parts/Sections/Header';
import Footer from 'components/Home/Parts/Sections/Footer';

const Editorials: React.SFC = () => (
  <React.Fragment>
    <Header align="right">
      <Heading level={2}>
        EDITORIALS
      </Heading>
    </Header>
    <Preview>
      <Preview.Secondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            STORY 00
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            STORY 01
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            STORY 02
          </PreviewSecondary.Meta>
        </PreviewSecondary>
        <PreviewSecondary>
          <PreviewSecondary.Media />
          <PreviewSecondary.Meta>
            STORY 03
          </PreviewSecondary.Meta>
        </PreviewSecondary>
      </Preview.Secondary>
      <Preview.Primary>
        <PreviewPrimary>
          <PreviewPrimary.Media />
          <PreviewPrimary.Meta>
            <HeadingAuto>
              LATEST
            </HeadingAuto>
          </PreviewPrimary.Meta>
        </PreviewPrimary>
      </Preview.Primary>
    </Preview>
    <Footer align="left">
      VIEW ALL...
    </Footer>
  </React.Fragment>
);

export default Editorials;
