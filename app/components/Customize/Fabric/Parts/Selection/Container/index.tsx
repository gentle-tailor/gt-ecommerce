import styled from '@emotion/styled';

type SectionProps = {
  children: React.ReactNode;
};

const Section = styled('div')<SectionProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 214px;

  & > :not(:last-child) {
    margin-right: 2.5em;
  }
`;

export default Section;
