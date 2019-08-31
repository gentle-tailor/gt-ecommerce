import React from 'react';
import * as PATHS from 'routes/paths';
import LinkContainer from 'components/Shared/LinkContainer';
import Selection from 'components/Shared/Selection';
import SelectionInfo from 'components/Shared/SelectionInfo';
import HeadingAuto from 'components/Shared/HeadingAuto';
import List from 'components/Customize/Shared/List';

const Selections: React.SFC = () => (
  <List>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_JACKET}>
          <SelectionInfo>
            <SelectionInfo.Category>
              LINING
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  DEFAULT
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$0.00
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_JACKET}>
          <SelectionInfo>
            <SelectionInfo.Category>
              BUTTON COLOR
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  DEFAULT
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$0.00
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
    <Selection>
      <Selection.Media />
      <Selection.Meta>
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_JACKET}>
          <SelectionInfo>
            <SelectionInfo.Category>
              BUTTON THREAD COLOR
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  DEFAULT
                </HeadingAuto>
              </LinkContainer.Indicator>
            </SelectionInfo.Name>
            <SelectionInfo.Price>
              +$0.00
            </SelectionInfo.Price>
          </SelectionInfo>
        </LinkContainer>
      </Selection.Meta>
    </Selection>
  </List>
);

export default Selections;
