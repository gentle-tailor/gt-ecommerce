import styled from '@emotion/styled';
import Inner from 'components/Shared/Section';

type SectionProps = {
  children: React.ReactNode;
};

const Section = styled(Inner)<SectionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  max-width: 95%;
  margin-bottom: 214px;
`;

export default Section;
