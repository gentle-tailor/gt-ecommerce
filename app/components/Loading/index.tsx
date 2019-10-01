import React from 'react';
import Slide from 'components/Shared/Transitions/SlidePseudo';
import ClippedContainer from 'components/Shared/ClippedContainer';
import Container from './Parts/Container';
import Heading from './Parts/Heading';
import Header from './Parts/Header';
import Progress from './Parts/Progress';

type LoadingProps = {
  onLoad: () => void;
};

const Loading: React.SFC<LoadingProps> = ({ onLoad }) => (
  <Progress duration={1000}>
    {controls => (
      <Container>
        <Header>
          <Slide
            status={100 > controls.progress ? 'mounting' : 'unmounting'}
            directionIn="up"
            directionOut="up"
            duration={1000}
            stagger={75}
            onMounted={controls.start}
            onUnmounted={onLoad}
          >
            <ClippedContainer>
              <Heading>
                Gentle
              </Heading>
            </ClippedContainer>
            <ClippedContainer>
              <Heading>
                Tailor
              </Heading>
            </ClippedContainer>
            <ClippedContainer>
              <Heading>
                Fukuoka
              </Heading>
            </ClippedContainer>
          </Slide>
        </Header>
      </Container>
    )}
  </Progress>
);

export default Loading;
