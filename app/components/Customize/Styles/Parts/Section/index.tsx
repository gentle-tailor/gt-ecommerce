import styled from '@emotion/styled';

type SectionProps = {
  children: React.ReactNode;
};

const Section = styled('div')<SectionProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 214px;
`;

export default Section;
