import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.SFC<PageLayoutProps> = ({ children }) => (
  <React.Fragment>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </React.Fragment>
);

export default PageLayout;
