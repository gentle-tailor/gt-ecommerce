import React from 'react';
import * as PATHS from 'routes/paths';
import LinkContainer from 'components/Shared/LinkContainer';
import Selection from 'components/Shared/Selection';
import SelectionInfo from 'components/Shared/SelectionInfo';
import HeadingAuto from 'components/Shared/HeadingAuto';
import Container from './Container';

const Selections: React.SFC = () => (
  <Container>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_JACKET}>
          <SelectionInfo>
            <SelectionInfo.Category>
              ARTICLE
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  JACKET
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$129.99
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              ARTICLE
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  PANTS
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$129.99
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_VEST}>
          <SelectionInfo>
            <SelectionInfo.Category>
              ARTICLE
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  VEST
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$29.99
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
  </Container>
);

export default Selections;
