import React from 'react';

import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import ErrorMessage from '../parts/ErrorMessage';

function NotFound() {
  return (
    <>
      <Header theme='black' />
      <ErrorMessage />
      <Sitemap loc='home' />
      <Footer />
    </>
  );
}

export default NotFound;
