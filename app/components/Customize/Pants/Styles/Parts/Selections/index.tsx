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
              FIT
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              CUFFS
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              PLEATS
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              FASTENING
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
        <LinkContainer to={PATHS.PATH_CUSTOMIZE_PANTS}>
          <SelectionInfo>
            <SelectionInfo.Category>
              POCKETS
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
  </List>
);

export default Selections;
