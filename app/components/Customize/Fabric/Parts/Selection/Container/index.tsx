import styled from '@emotion/styled';

type SectionProps = {
  children: React.ReactNode;
};

const Section = styled('div')<SectionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 95%;

  & > :not(:last-child) {
    margin-right: 60px;
  }
`;

export default Section;