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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              BUTTONS
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  S5B x 5
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              BREAST POCKET
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  PIPING POCKET
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              SEAT POCKET
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  PIECE BALL
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              BACK
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  LINING
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
