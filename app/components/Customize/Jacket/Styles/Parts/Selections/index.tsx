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
              STYLE
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  SP
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
              LAPEL
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  NOTCH
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
              BREAST POCKET
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  BOX
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
              SEAT POCKET
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  CHANGE_HACKING
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
              LINING
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  UNITED BACK
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
              SLEEVE BUTTONS
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  ONE BUTTON
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
              VENT
            </SelectionInfo.Category>
            <SelectionInfo.Name>
              <LinkContainer.Indicator>
                <HeadingAuto>
                  CENTER
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
