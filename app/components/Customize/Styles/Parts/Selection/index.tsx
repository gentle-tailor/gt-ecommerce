import React from 'react';
import Container from './Container';
import Info from './Info';
import Item from './Item';

const Selection: React.SFC = () => (
  <Container>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            STYLE
          </Info.Category>
          <Info.Name>
            SP
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            LAPEL
          </Info.Category>
          <Info.Name>
            NOTCH
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            BREAST<br/>
            POCKET
          </Info.Category>
          <Info.Name>
            BOX
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            SEAT<br/>
            POCKET
          </Info.Category>
          <Info.Name>
            CHANGE HACKING
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            LINING
          </Info.Category>
          <Info.Name>
            UNITED BACK
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            SLEEVE<br/>
            BUTTONS
          </Info.Category>
          <Info.Name>
            ONE BUTTON
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
    <Item>
      <Item.Media />
      <Item.Meta>
        <Info>
          <Info.Category>
            VENT
          </Info.Category>
          <Info.Name>
            CENTER
          </Info.Name>
          <Info.Price>
            +$0.00
          </Info.Price>
        </Info>
      </Item.Meta>
    </Item>
  </Container>
);

export default Selection;
