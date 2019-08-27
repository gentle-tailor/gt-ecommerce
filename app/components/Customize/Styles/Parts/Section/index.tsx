import * as R from 'ramda';
import styled from '@emotion/styled';
import Inner from 'components/Shared/Section';

type SectionProps = {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
};

const alignment = R.cond([
  [R.equals('left'), R.always('flex-start')],
  [R.equals('right'), R.always('flex-end')],
  [R.T, R.always('center')]
])

const Section = styled(Inner)<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: ${props => alignment(props.align)};
  width: 900px;
  max-width: 95%;
  margin-bottom: 100px;
`;

export default Section;
