import React from 'react';
import Footer from './Footer';
import Header from './Header';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout: React.SFC<PageLayoutProps> = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Footer />
  </React.Fragment>
);

export default PageLayout;
